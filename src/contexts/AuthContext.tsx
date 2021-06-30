import { createContext, ReactNode, useState } from 'react'
import { firebase, auth } from '../services/firebase'

interface AuthContextProviderProps {
    children: ReactNode
}

interface AuthContextData {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>
}

type User = {
    id: string,
    name: string,
    avatar: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()

    async function signInWithGoogle() {
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
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, user }}>
            {children}
        </AuthContext.Provider>
    )
}