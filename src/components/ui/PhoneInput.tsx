import React, { useEffect, useReducer } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import {
  PhoneNumberReducerActionType,
  initialState,
  phoneNumberReducer,
  PhoneNumberReducerState,
} from '../../reducers/phoneNumber'
import ThemedText from './ThemedText'

interface PhoneInputProps {
  onChange: (state: PhoneNumberReducerState) => void
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
  country: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
  },
  divider: {
    height: '100%',
    width: '1px',
    backgroundColor: 'white',
  },
})

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange, style }) => {
  const [state, dispatch] = useReducer(phoneNumberReducer, initialState)
  const { theme } = useTheme()

  useEffect(() => {
    onChange(state)
  }, [state])

  return (
    <View style={[style, s.wrapper, { borderColor: theme.text }]}>
      <Pressable
        onPress={() =>
          dispatch({
            type: PhoneNumberReducerActionType.COUNTRY_CODE,
            payload: '+33',
          })
        }
      >
        <View style={s.country}>
          <ThemedText style={{ fontFamily: 'Poppins_600SemiBold' }}>
            {state.countryCode}
          </ThemedText>
        </View>
      </Pressable>
      <View style={s.divider} />
      <View style={s.input}>
        <TextInput
          style={{ color: theme.text, fontFamily: 'Poppins_600SemiBold' }}
          onChangeText={(val) =>
            dispatch({
              type: PhoneNumberReducerActionType.PHONE_NUMBER,
              payload: val,
            })
          }
          value={state.phoneNumber}
          placeholder="Phone number"
          keyboardType="numeric"
        />
      </View>
    </View>
  )
}

export default PhoneInput
