import { AuthSession, User } from '@supabase/supabase-js'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth'

interface UseAuthHook {
  session: AuthSession | null
  user: User | null
}

const useAuth = (): UseAuthHook => {
  const auth = useContext(AuthContext)

  if (auth === undefined) {
    throw new Error('useAuth must be used inside the Auth Provider')
  }

  return auth
}

export { useAuth }
