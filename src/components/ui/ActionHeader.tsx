import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import ThemedText from './ThemedText'

interface ActionHeaderProps {
  title: string
  actions: {
    icon: React.ReactNode
    onClick: () => void
  }[]
}

const s = StyleSheet.create({
  view: {
    width: '90%',
    marginTop: '10%',
    marginHorizontal: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_800ExtraBold',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const ActionHeader: React.FC<ActionHeaderProps> = ({ title, actions }) => {
  return (
    <View style={s.view}>
      <ThemedText style={s.title}>{title}</ThemedText>
      <View style={s.actions}>
        {[...actions].map((value, index) => (
          <Pressable key={index} onPress={value.onClick}>
            {value.icon}
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default ActionHeader
