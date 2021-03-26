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
    username: string
    socketId: string
    roomId: string
}

export interface serverMessage {
    userId: string
    roomId: string
    messageText: string
}