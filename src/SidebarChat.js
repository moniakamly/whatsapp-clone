import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChat.css';

function SidebarChat({ addNewChat, id, name, lastMessage, image}) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500))
    }, []);
    const createChat = () => {
        const roomName = prompt("Please enter a name for the room chat");

        if (roomName) {
            // do db stuff
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
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
