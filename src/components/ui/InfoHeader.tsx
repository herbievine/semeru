import React from 'react'
import { StyleSheet, View } from 'react-native'
import ThemedText from './ThemedText'

interface InfoHeaderProps {
  title: string
  description: string[]
}

const s = StyleSheet.create({
  view: {
    width: '100%',
    marginTop: '15%',
    paddingLeft: '2rem',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins_800ExtraBold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold',
  },
})

const InfoHeader: React.FC<InfoHeaderProps> = ({ title, description }) => {
  return (
    <View style={s.view}>
      <ThemedText style={s.title}>{title}</ThemedText>
      {[...description].map((value, index) => (
        <ThemedText key={index} style={s.description}>
          {value}
        </ThemedText>
      ))}
    </View>
  )
}

export default InfoHeader
