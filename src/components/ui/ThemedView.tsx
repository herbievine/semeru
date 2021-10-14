import React from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

interface ThemedViewProps {
  style?: StyleProp<ViewStyle>
  props?: ViewProps
}

const ThemedView: React.FC<ThemedViewProps> = ({ children, style, props }) => {
  const { theme } = useTheme()

  return (
    <View {...props} style={[style, { backgroundColor: theme.background }]}>
      {children}
    </View>
  )
}

export default ThemedView
