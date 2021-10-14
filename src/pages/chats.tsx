import React from 'react'
import { Pressable } from 'react-native'
import ThemedText from '../components/ui/ThemedText'
import ThemedView from '../components/ui/ThemedView'
import { useTheme } from '../hooks/useTheme'

interface ChatsProps {}

const Chats: React.FC<ChatsProps> = ({}) => {
  const { setTheme } = useTheme()

  return (
    <ThemedView>
      <ThemedText>Chats</ThemedText>
      <Pressable
        onPress={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        <ThemedText>Change theme!!!</ThemedText>
      </Pressable>
    </ThemedView>
  )
}

export default Chats
