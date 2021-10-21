import React from 'react'
import { StyleSheet, View } from 'react-native'
import Arrow from '../components/svg/Arrow'
import Messages from '../components/svg/Messages'
import Button from '../components/ui/Button'
import InfoHeader from '../components/ui/InfoHeader'
import ThemedView from '../components/ui/ThemedView'
import { parseError } from '../lib/parseError'
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
})

const Landing: React.FC<IRouterProps<'Landing'>> = ({
  navigation: { navigate },
}) => {
  return (
    <ThemedView style={s.view}>
      <InfoHeader
        title="Semeru"
        description={['Simple, safe and', 'secure messaging']}
      />
      <View style={s.svg}>
        <Messages />
      </View>
      <View style={s.button}>
        <Button
          text="Get started"
          onClick={() => navigate('Register')}
          icon={<Arrow props={{ height: '7', rotation: '90' }} />}
          iconSide="RIGHT"
        />
      </View>
    </ThemedView>
  )
}

export default Landing
