import React from 'react'
import './Message.css'
import { Avatar } from '@mui/material'

function Message() {
  return (
    <div className='message'>
        <Avatar />
        <div className="message__info">
            <h4>
                id
                <span className='message__timestamp'>this is message__timestamp
                </span>
            </h4>
            <p>this is a message</p>
        </div>
    </div>
  )
}

export default Message
