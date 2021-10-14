import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface LoadingProps {}

const s = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <View style={s.view}>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading
