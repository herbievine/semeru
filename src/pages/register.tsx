import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useClient } from 'react-supabase'
import Arrow from '../components/svg/Arrow'
import Fingerprint from '../components/svg/Fingerprint'
import Button from '../components/ui/Button'
import InfoHeader from '../components/ui/InfoHeader'
import PhoneInput from '../components/ui/PhoneInput'
import ThemedView from '../components/ui/ThemedView'
import { useTheme } from '../hooks/useTheme'
import { PhoneNumberReducerState } from '../reducers/phoneNumber'
import { IRouterProps } from '../types/globals'

const s = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svg: {
    width: '80%',
  },
  button: {
    width: '80%',
    marginBottom: '2rem',
  },
  error: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    marginBottom: '0.5rem',
  },
})

const Register: React.FC<IRouterProps<'Register'>> = ({
  navigation: { navigate },
}) => {
  const [phoneInfo, setPhoneInfo] = useState<PhoneNumberReducerState>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')
  const { auth } = useClient()
  const { theme } = useTheme()

  const sendOTP = async () => {
    setLoading(true)
    setError(null)

    if (!phoneInfo?.isValid) {
      setError("The phone number isn't valid")
      setLoading(false)
    } else {
      const { error } = await auth.signIn({
        phone: phoneInfo.international,
      })

      if (error) {
        setError('An unexpected error occured')
        setLoading(false)
      } else {
        navigate('Verification', {
          internationalPhoneNumber: phoneInfo.international,
        })
      }
    }

    setLoading(false)
  }

  return (
    <ThemedView style={s.view}>
      <InfoHeader
        title="Verification"
        description={['We need to verify', 'your phone number']}
      />
      <View style={s.svg}>
        <Fingerprint />
      </View>
      <View style={s.button}>
        <Text style={[s.error, { color: theme.error }]}>{error}</Text>
        <PhoneInput
          onChange={(state) => setPhoneInfo(state)}
          style={{ marginBottom: '1rem' }}
        />
        <Button
          text="Send verification code"
          onClick={async () => sendOTP()}
          loading={loading}
          icon={<Arrow props={{ height: '7', rotation: '90' }} />}
          iconSide="RIGHT"
        />
      </View>
    </ThemedView>
  )
}

export default Register
