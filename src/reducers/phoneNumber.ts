import {
  CLEAN_NUMBER,
  INTERNATIONAL_PHONE_NUMBER,
  NUMBERS_ONLY,
  PHONE_NUMBER_AREA_CODE,
} from '../lib/regex'

export enum PhoneNumberReducerActionType {
  COUNTRY_CODE = 'COUNTRY_CODE',
  PHONE_NUMBER = 'PHONE_NUMBER',
}

interface PhoneNumberReducerAction {
  type: PhoneNumberReducerActionType
  payload: string
}

export interface PhoneNumberReducerState {
  countryCode: string
  phoneNumber: string
  international: string
  isValid: boolean
}

export const initialState: PhoneNumberReducerState = {
  countryCode: '+44',
  phoneNumber: '',
  international: '+44',
  isValid: false,
}

export const phoneNumberReducer = (
  state: PhoneNumberReducerState,
  action: PhoneNumberReducerAction
) => {
  const { type, payload } = action

  const cleanPayload = payload.replace(CLEAN_NUMBER, '')

  switch (type) {
    case PhoneNumberReducerActionType.COUNTRY_CODE:
      if (PHONE_NUMBER_AREA_CODE.test(cleanPayload)) {
        return {
          ...state,
          countryCode: cleanPayload,
          international: `${cleanPayload}${state.phoneNumber}`,
          isValid: INTERNATIONAL_PHONE_NUMBER.test(
            `${cleanPayload}${state.phoneNumber}`
          ),
        }
      } else {
        return {
          ...state,
        }
      }
    case PhoneNumberReducerActionType.PHONE_NUMBER:
      if (NUMBERS_ONLY.test(cleanPayload)) {
        return {
          ...state,
          phoneNumber: cleanPayload,
          international: `${state.countryCode} ${cleanPayload}`,
          isValid: INTERNATIONAL_PHONE_NUMBER.test(
            `${state.countryCode}${cleanPayload}`
          ),
        }
      } else {
        return {
          ...state,
        }
      }
    default:
      throw new Error()
  }
}
