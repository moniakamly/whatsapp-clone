import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat,name, lastMessage, image}) {

    const createChat = () => {
        const roomName = prompt("Please enter a name for the room chat");

        if (roomName) {
            // do db stuff
        }
    };

    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={image}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
