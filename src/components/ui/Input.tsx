import React, { useState } from 'react'
import { StyleSheet, View, TextInput, StyleProp, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

interface InputProps {
  onChange: (state: string) => void
  type: 'default' | 'numeric' | 'email-address'
  limit?: number
  style?: StyleProp<ViewStyle>
}

const s = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
  },
})

const Input: React.FC<InputProps> = ({ onChange, type, limit, style }) => {
  const [text, setText] = useState('')
  const { theme } = useTheme()

  return (
    <View style={[style, s.wrapper, { borderColor: theme.text }]}>
      <View style={s.input}>
        <TextInput
          style={{ color: theme.text, fontFamily: 'Poppins_600SemiBold' }}
          onChangeText={(val) => {
            setText(val)
            onChange(val)
          }}
          value={text}
          maxLength={limit}
          placeholder="Phone number"
          keyboardType={type}
        />
      </View>
    </View>
  )
}

export default Input
