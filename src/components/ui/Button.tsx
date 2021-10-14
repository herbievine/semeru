import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import ThemedText from './ThemedText'

interface ButtonProps {
  text: string
  icon?: React.ReactNode
  iconSide?: 'LEFT' | 'RIGHT'
  loading?: boolean
  loadingComponent?: Element
  onClick: () => void
}

const s = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginHorizontal: 10,
  },
})

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconSide,
  loading,
  loadingComponent,
  onClick,
}) => {
  const { theme } = useTheme()

  return (
    <Pressable onPress={!loading ? onClick : () => null}>
      <View style={[s.button, { backgroundColor: theme.accent }]}>
        {!loading ? (
          <>
            {icon && iconSide === 'LEFT' && icon}
            <ThemedText style={s.text}>{text}</ThemedText>
            {icon && iconSide === 'RIGHT' && icon}
          </>
        ) : (
          loadingComponent ?? (
            <ActivityIndicator
              style={{ paddingVertical: 5 }}
              size="small"
              color={theme.text}
            />
          )
        )}
      </View>
    </Pressable>
  )
}

export default Button
