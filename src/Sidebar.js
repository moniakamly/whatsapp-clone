import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIconIcon from '@material-ui/icons/MoreVert';
import { Avatar ,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='https://avatars.githubusercontent.com/u/54155268?s=460&u=88070a5fe3418e4978fccc5c1f14dc9a95469dfc&v=4'/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton><IconButton>
                        <MoreVertIconIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>

            <div className="sidebar__chats">
                
            </div>
        </div>
    )
}

export default Sidebar
