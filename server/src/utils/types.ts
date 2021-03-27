export interface user {
    id?: number
    username?: string
    email?: string
    password?: string
}

export interface clientMessage {
    id: number
    username: string
    roomname: string
    messageText: string
    date?: Date
}

export interface connection {
    socketId: string
    userId?: number
    roomId: number
    username: string
}

export interface serverMessage {
    userId: number
    roomId: number
    messageText: string
}

export interface room {
    roomId: number
    roomname: string
    icon? : ImageData
}