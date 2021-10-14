import AsyncStorage from '@react-native-async-storage/async-storage'
import type { AuthSession, User } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { useAuthStateChange, useClient } from 'react-supabase'
import { getItem, setItem } from '../lib/storage'

interface AuthContextInterface {
  session: AuthSession | null
  user: User | null
}

export const AuthContext = React.createContext<AuthContextInterface>({
  session: null,
  user: null,
})

const AuthProvider: React.FC<{}> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextInterface>({
    session: null,
    user: null,
  })
  const client = useClient()

  useEffect(() => {
    const fetchSession = async () => {
      const localSession = await getItem('session')

      let session: AuthSession | null

      if (localSession) {
        session = JSON.parse(localSession) as AuthSession
      } else {
        session = client.auth.session()
      }

      return session
    }

    fetchSession().then((session) => {
      setAuth({ session, user: session?.user ?? null })
    })
  }, [])

  useAuthStateChange(async (_, session) => {
    setItem('session', JSON.stringify(session))
    setAuth({ session, user: session?.user ?? null })
  })

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
