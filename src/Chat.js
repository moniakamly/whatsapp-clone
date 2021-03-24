import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react'; 
import './Chat.css';
import axios from './axios'

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "Demo App", 
            timestamp: "Now",
            received: true,
        });
        
        setInput("");
    };

    const NOW = new Date();

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://www.webmarketing-com.com/wp-content/uploads/2020/05/facebook-avatars.jpg" />
                <div className="chat__headerInfo">
                    <h3>Testing</h3>
                    <p>Last seen {NOW.toUTCString()} </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div> 
            </div>

            <div className="chat__body">
                { messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}` }>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
                )) }
                {/* <p className="chat__message">
                    <span className="chat__name">Monia</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>
                
                <p className="chat__receiver chat__message">
                    <span className="chat__name">Monia</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        placeholder="Type a message" 
                        type="text" 
                    />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
