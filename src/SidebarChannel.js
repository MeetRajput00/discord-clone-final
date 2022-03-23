import React from 'react';
import './SidebarChannel.css';

function SidebarChannel({id, channelName}) {
  return (
    <div className='SidebarChannel'>
        <h4><span classname="sidebarChannel_hash">#</span>{channelName}</h4>
    </div>
  )
}

export default SidebarChannel