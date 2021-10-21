import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useClient } from 'react-supabase'
import Arrow from '../components/svg/Arrow'
import Fingerprint from '../components/svg/Fingerprint'
import Button from '../components/ui/Button'
import InfoHeader from '../components/ui/InfoHeader'
import Input from '../components/ui/Input'
import ThemedView from '../components/ui/ThemedView'
import { useTheme } from '../hooks/useTheme'
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

const Verification: React.FC<IRouterProps<'Verification'>> = ({
  route: {
    params: { internationalPhoneNumber },
  },
}) => {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { auth } = useClient()
  const { theme } = useTheme()

  const verifyOTP = () => {
    setLoading(true)
    setError(null)

    if (code.length < 6) {
      setLoading(false)
      setError('Verification code too short')
    } else if (code.length >= 6) {
      auth
        .verifyOTP({
          phone: internationalPhoneNumber,
          token: code,
        })
        .catch(() => {
          setLoading(false)
          setError('Invalid verification code')
        })
    }

    setLoading(false)
  }

  useEffect(() => {
    if (code.length >= 6) verifyOTP()
  }, [code])

  return (
    <ThemedView style={s.view}>
      <InfoHeader
        title="Verification"
        description={['Enter the code we just', 'sent to your phone']}
      />
      <View style={s.svg}>
        <Fingerprint />
      </View>
      <View style={s.button}>
        <Text style={[s.error, { color: theme.error }]}>{error}</Text>
        <Input
          onChange={(val) => setCode(val)}
          placeholder="Confirm Code"
          type="numeric"
          style={{ marginBottom: '1rem' }}
          limit={6}
        />
        <Button
          text="Confirm code"
          onClick={() => verifyOTP()}
          loading={loading}
          icon={<Arrow props={{ height: '7', rotation: '90' }} />}
          iconSide="RIGHT"
        />
      </View>
    </ThemedView>
  )
}

export default Verification
