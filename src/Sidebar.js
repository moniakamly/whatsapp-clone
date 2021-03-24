import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIconIcon from '@material-ui/icons/MoreVert';
import { Avatar ,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

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
                <SidebarChat name="Test" lastMessage="test test" image="https://lesupermedia.fr/wp-content/uploads/2021/01/avatar-image1.jpeg"/>
                <SidebarChat name="Youtube" lastMessage="Yooo" image="https://dl.img-news.com/dl/img/s3/dl/2020/05/200517192624-02-how-to-make-facebook-avatar-trnd-super-tease.jpg"/>
                <SidebarChat name="Dancing" lastMessage="Break a leg" image="https://lesupermedia.fr/wp-content/uploads/2021/01/avatar-image2.jpg"/>

            </div>
        </div>
    )
}

export default Sidebar
