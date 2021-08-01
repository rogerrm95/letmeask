import { useEffect } from 'react'
import { createContext, ReactNode, useState } from 'react'
import { firebase, auth } from '../services/firebase'

interface AuthContextProviderProps {
    children: ReactNode
}

interface AuthContextData {
    user: User | undefined,
    isLoading: boolean,
    signInWithGoogle: () => Promise<void>,
    signOutWithGoogle: () => Promise<void>
}

type User = {
    id: string,
    name: string,
    avatar: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL) {
                    throw new Error('Error, photo or name is missing')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        try {
            setIsLoading(true)
            const provider = new firebase.auth.GoogleAuthProvider()
            const result = await auth.signInWithPopup(provider)

            if (result.user) {
                const { displayName, photoURL, uid } = result.user

                if (!displayName || !photoURL) {
                    throw new Error('Error, photo or name is missing')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }

            setIsLoading(false)
        } catch {
            setIsLoading(false)
        }
    }

    async function signOutWithGoogle() {
        await auth.signOut()
        setUser(undefined)
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, signOutWithGoogle, isLoading, user }}>
            {children}
        </AuthContext.Provider>
    )
}