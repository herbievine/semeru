import React, { useState } from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

interface SearchProps {
  onChange: (state: string) => void
  placeholder: string
  icon: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const s = StyleSheet.create({
  wrapper: {
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    marginLeft: 8,
    maxWidth: '80%',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
  },
})

const Search: React.FC<SearchProps> = ({
  onChange,
  placeholder,
  icon,
  style,
}) => {
  const [text, setText] = useState('')
  const { theme } = useTheme()

  return (
    <View
      style={[style, s.wrapper, { backgroundColor: theme.backgroundVariant }]}
    >
      {icon}
      <TextInput
        style={[s.text, { color: theme.variant }]}
        onChangeText={(val) => {
          setText(val)
          onChange(val)
        }}
        value={text}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Search
