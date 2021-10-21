import { RealtimeSubscription } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { useClient, useFilter, useRealtime } from 'react-supabase'
import { DB } from '../types/database'
import { Chats } from '../types/globals'

const useChats = () => {
  const client = useClient()
  const [chats, setChats] = useState<Chats[]>([])
  const [membersData, setMembersData] = useState<DB.Member[]>()
  const [channelsData, setChannelsData] = useState<DB.Channel[]>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  let memberSubscription: RealtimeSubscription

  useEffect(() => {
    getChats().then(() => setLoading(false))
  }, [])

  const getChats = async () => {
    if (!chats?.length) {
      const { data: fetchedMembers, error: fetchedMembersError } = await client
        .from<DB.Member>('members')
        .select('*')
        .eq('userId', '94a9aa95-c794-404a-9a37-7f424b215ebb')

      if (fetchedMembersError) {
        setLoading(false)
        setError(fetchedMembersError.message)
      } else if (fetchedMembers) {
        setMembersData(fetchedMembers)

        // TODO: fix this to resolve all channels

        fetchedMembers.map(async (member) => {
          const { data: fetchedChannels, error: fetchedChannelsError } =
            await client
              .from<DB.Channel>('channels')
              .select('*')
              .eq('id', member.channelId)
              .single()

          if (fetchedChannelsError) {
            setLoading(false)
            setError(fetchedChannelsError.message)
          } else if (fetchedChannels) {
            setMembersData(fetchedMembers)

            setChats((prev) => [
              {
                memberId: member.id,
                channelId: member.channelId,
                name: member.name,
                image: member.image,
                read: member.read,
                lastActive: fetchedChannels.lastActive,
                lastMessage: fetchedChannels.lastMessage,
              },
              ...prev,
            ])
          }
        })
      }
    }
  }

  // let memberSubscription: RealtimeSubscription

  // useEffect(() => {
  //   memberSubscription = client
  //     .from<DB.Member>('*')
  //     .on('*', (payload) => {
  //       console.log('Change received!', payload)
  //     })
  //     .subscribe()

  //   return () => {
  //     memberSubscription.unsubscribe()
  //   }
  // }, [])

  // const memberFilter = useFilter<DB.Member>((query) =>
  //   query.eq('userId', '94a9aa95-c794-404a-9a37-7f424b215ebb').limit(10)
  // )
  // const [{ data: memberData }] = useRealtime<DB.Member>('members', {
  //   select: {
  //     columns: 'id, channelId, name, image, read',
  //     filter: memberFilter,
  //   },
  // })

  // useEffect(() => {
  //   console.log(memberData)

  //   if (memberData && memberData?.length > 0) {
  //     const j = client
  //       .from<DB.Channel>(`channels:id=eq.${memberData[0].channelId}`)
  //       .select('id, lastMessage, lastActive')
  //       .then(console.log)

  //     // console.log(j.then((val) => val.data))
  //   }
  // }, [memberData])

  // const channelFilter = useFilter<DB.Channel>((query) =>
  //   query.eq('id', memberData![0].channelId).limit(10)
  // )
  // const [{ data: channelData }] = useRealtime<DB.Channel>('channels', {
  //   select: {
  //     columns: 'id, lastMessage, lastActive',
  //     filter: channelFilter,
  //   },
  // })

  return { chats, loading, error }
}

export { useChats }
