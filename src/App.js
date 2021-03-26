import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import axios from './axios';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [messages, setMessages] = useState([]);
  const [ user ] = useStateValue();

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

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <BrowserRouter>
          <Switch>
            
            <Route path="/rooms/:roomId">  
              <Chat messages={messages} />
              <Sidebar />
            </Route>
            
            <Route path="/">
              <Chat messages={messages} />
              <Sidebar />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      )}
    </div>
  );
}

export default App;
