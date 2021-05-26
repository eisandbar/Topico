import React, { useState } from 'react'

const CreateRoom = (props) => {
    const [roomName, setRoomName] = useState("")

    const handleChange = (e) => {
        setRoomName(e.target.value)
    }

    const handleSubmit = async (e) => {
        props.createRoom(roomName.slice())
        setRoomName("")
    }

    return (
        <form onSubmit={handleSubmit} className="columns">
            <div className="column">
                <input type="username" value={roomName} onChange={handleChange} placeholder="Enter room name" className="input is-size-5 is-rounded is-primary" />
            </div>
            <div className="column">
                <button type="submit" className="button is-rounded is-size-5 has-text-weight-semibold"> Create Room </button>
            </div>
        </form>
    )
}

export default CreateRoom