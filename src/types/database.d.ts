export enum Status {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export namespace DB {
  interface User {
    id: string
    name: string
    bio?: string
    image: string
    phoneNumber: string
    status: Status
  }

  interface Member {
    id: string
    userId: string
    channelId: string
    name: string
    image: string
    read: boolean
  }

  interface Channel {
    id: string
    lastActive: string
    lastMessage?: string
  }
}
