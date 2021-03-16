import React, {Component} from 'react'
import testMessages from '../../test/testMessages'
import MessageContainer from '../chat_parts/MessageContainer'
import Profile from '../chat_parts/Profile'



class ChatPage extends Component {
    render() {
        return (
            <div>
                <div className="room-column">
                    <Profile username={'User'}/>
                </div>
                <div className="chat-column">
                    <MessageContainer messages={testMessages}/>
                </div>
                <div className="users-column">

                </div>
            </div>

        )
    }
}

export default ChatPage