import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';
function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className="message_Info">
            <h4>@meet_singh_07
                <span className='message_timestamp'>Timestamp</span>
            </h4>
            <p>This is the message.</p>
        </div>
    </div>
  )
}

export default Message