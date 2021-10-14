import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

interface ThemedTextProps {
  style?: StyleProp<TextStyle>
  props?: TextProps
}

const ThemedText: React.FC<ThemedTextProps> = ({ children, style, props }) => {
  const { theme } = useTheme()

  return (
    <Text {...props} style={[style, { color: theme.text }]}>
      {children}
    </Text>
  )
}

export default ThemedText
