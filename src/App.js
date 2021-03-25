import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import axios from './axios';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
          setMessages(response.data)
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('bec4e8bffacec764f1ed', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log('messages are ',messages);
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Switch>
            
            <Route path="/rooms/:roomId">  
              <Chat messages={messages} />
              <Sidebar />
            </Route>
            
            <Route path="/app">
              <h1>Yoooo</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
