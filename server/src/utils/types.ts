export interface user {
    username: string
    email: string
    password: string
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
    room: string
}

export interface serverMessage {
    userId: string
    roomId: string
    messageText: string
}