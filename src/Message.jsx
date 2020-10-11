import React from 'react'

function Message({message, userName}) {
    const isUser = userName === message.userName
    return (
        <div className={isUser? 'message-user':'messages'}>
            <p>{message.userName} :  {message.message}</p>
        </div>
    )
}

export default Message
