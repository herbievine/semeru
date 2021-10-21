import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { Pressable, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import {
  useClient,
  useFilter,
  useInsert,
  useRealtime,
  useSelect,
} from 'react-supabase'
import Edit from '../components/svg/Edit'
import Lens from '../components/svg/Lens'
import ActionHeader from '../components/ui/ActionHeader'
import InfoCard from '../components/ui/InfoCard'
import Search from '../components/ui/Search'
import ThemedText from '../components/ui/ThemedText'
import ThemedView from '../components/ui/ThemedView'
import { useChats } from '../hooks/useChats'
import { useTheme } from '../hooks/useTheme'
import { ITabsProps } from '../types/globals'

const s = StyleSheet.create({
  gap: {
    marginTop: '1rem',
  },
})

const Chats: React.FC<ITabsProps<'Chats'>> = ({}) => {
  const { theme } = useTheme()
  const { chats, loading } = useChats()

  useEffect(() => console.log({ chats, loading }), [chats])

  return (
    <ThemedView>
      <ActionHeader
        title="Chats"
        actions={[
          {
            icon: <Edit props={{ height: 20 }} />,
            onClick: () => console.log('create new message'),
          },
        ]}
      >
        Chats
      </ActionHeader>
      <View style={s.gap}>
        <Search
          onChange={console.log}
          placeholder="Search"
          icon={<Lens props={{ height: 18, color: theme.variant }} />}
        />
      </View>
      <View style={s.gap}>
        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <InfoCard
              photoUrl={item.image}
              title={item.name}
              description={item.lastMessage ?? ''}
              read={item.read}
            />
          )}
          keyExtractor={({ memberId }) => memberId}
        />
      </View>
    </ThemedView>
  )
}

export default Chats
