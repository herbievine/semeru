import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../../hooks/useAuth'
import Landing from '../../pages/landing'
import Register from '../../pages/register'
import Verification from '../../pages/verification'
import { IRouter } from '../../types/globals'
import NavigationTabs from './NavigationTabs'
import Profile from '../../pages/profile'

const Stack = createStackNavigator<IRouter>()

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { session } = useAuth()
  // const [result, reexecute] = useRealtime(
  //   'users',
  //   { select: { columns:'id, username' } },
  //   (data, payload) => data.username === payload.username,
  // )

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        {!session ? (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Verification" component={Verification} />
          </>
        ) : (
          <>
            {true ? (
              <>
                <Stack.Screen name="Screens" component={NavigationTabs} />
                {/* <Stack.Screen name="Message" component={Message} /> */}
              </>
            ) : (
              <Stack.Screen name="Profile" component={Profile} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
