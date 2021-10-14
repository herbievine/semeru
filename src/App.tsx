import { createClient, SupabaseClient } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-supabase'
import ContextRegistration from './components/logic/ContextRegistration'
import Navigation from './components/logic/Navigation'
import constants from 'expo-constants'
import Loading from './pages/loading'

interface SemeruProps {
  supabaseUrl: string
  supabaseKey: string
}

const Semeru: React.FC<SemeruProps> = ({ supabaseUrl, supabaseKey }) => {
  const [client, setClient] = useState<SupabaseClient | null>(null)

  useEffect(() => {
    setClient(
      createClient(supabaseUrl, supabaseKey, {
        localStorage:
          Platform.OS === 'web' ? window.localStorage : AsyncStorage,
      })
    )
  }, [])

  return client ? (
    <Provider value={client}>
      <ContextRegistration>
        <Navigation />
      </ContextRegistration>
    </Provider>
  ) : (
    <Loading />
  )
}

Semeru.defaultProps = {
  supabaseUrl: constants.manifest?.extra?.supabaseUrl ?? '',
  supabaseKey: constants.manifest?.extra?.supabaseKey ?? '',
}

export default Semeru
