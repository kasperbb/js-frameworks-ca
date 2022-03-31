import React, { FC, useContext, useState } from 'react'

interface AuthContextValues {
  session: string
  setSession: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = React.createContext<AuthContextValues | null>(null)

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextValues
}

export const AuthProvider: FC = ({ children }) => {
  const [session, setSession] = useState('')

  const value: any = {
    session,
    setSession,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
