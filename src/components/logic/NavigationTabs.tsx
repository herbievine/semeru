import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '../../hooks/useTheme'
import Chats from '../../pages/chats'
import Contacts from '../../pages/contacts'
import Loading from '../../pages/loading'
import User from '../../pages/user'
import Camera from '../svg/Camera'
import Comments from '../svg/Comments'
import Person from '../svg/Person'
import Users from '../svg/Users'
import { ITabs } from '../../types/globals'

const Tab = createBottomTabNavigator<ITabs>()

interface NavigationTabsProps {}

const NavigationTabs: React.FC<NavigationTabsProps> = ({}) => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
        tabBarInactiveBackgroundColor: theme.background,
        tabBarActiveBackgroundColor: theme.background,
      })}
    >
      <Tab.Screen
        name={'Chats'}
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Comments
              props={{ fill: focused ? theme.accent : theme.text, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Contacts'}
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <Users
              props={{ fill: focused ? theme.accent : theme.text, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Camera'}
        component={Loading}
        options={{
          tabBarIcon: ({ focused }) => (
            <Camera
              props={{ fill: focused ? theme.accent : theme.text, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'User'}
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <Person
              props={{ fill: focused ? theme.accent : theme.text, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default NavigationTabs
