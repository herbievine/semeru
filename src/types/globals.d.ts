import type { StackScreenProps } from '@react-navigation/stack'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'

export type IRouter = {
  Landing: undefined
  Register: undefined
  Verification: { internationalPhoneNumber: string }
  Profile: undefined
  Screens: undefined
}

export type IRouterProps<S> = StackScreenProps<IRouter, S>

export type ITabs = {
  Chats: undefined
  Contacts: undefined
  Camera: undefined
  User: undefined
}

export type ITabsProps<S> = BottomTabBarProps<ITabs, S>
