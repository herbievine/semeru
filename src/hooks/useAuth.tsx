import { useContext } from 'react'
import { AuthContext } from '../context/Auth'

const useAuth = () => {
  const auth = useContext(AuthContext)

  if (auth === undefined) {
    throw new Error('useAuth must be used inside the Auth Provider')
  }

  return auth
}

export { useAuth }
