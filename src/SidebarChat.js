import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat({name, lastMessage, image}) {
    return (
        <div className="sidebarChat">
            <Avatar src={image}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default SidebarChat
