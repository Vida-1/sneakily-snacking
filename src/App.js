import React, { useEffect, useState } from 'react';
import { socket } from './socket';
import './App.css';
import Button from 'react-bootstrap/Button';
import sneakySnackers from './Images/sneakySnackers.jpg';
import cookies from './Images/cookies.jpg';

// import GameEffects from './GameEffects';
const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [recentPayload, setRecentPayload] = useState({});
  const [yesOrNoResponse, setYesOrNoResponse] = useState('');

  // const [visible, setVisible] = useState(true);

  useEffect(() => {

    console.log(`yesOrNoResponse is now set to: ${yesOrNoResponse}`);

    function handleConnect() {
      setIsConnected(true)
      console.log("handleConnect has been triggered");
    }

    function handleDisconnect() {
      setIsConnected(false);
      console.log("handleDisconnect has been triggered");
    }

    function startGame() {                                                                  // flag! Come back to this
      setYesOrNoResponse('yes');
      console.log("Now I'm gonna tell the server to start the game!");
      // socket.emit("Start the game!!")
    }

    // theses are our listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("questionsReady", (payload) => { setRecentPayload(payload); console.log(payload) });

    // clean up the socket listeners

    return () => {
      // turns off socket listeners 
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("response", () => console.log("response listener is off"));
    };
  }, [yesOrNoResponse]);

  const handleReady = () => {
    socket.emit("childReady")
  };
    
  return (
    <div>
      <header>
        <img src={cookies} id="cookies" alt="tipped cookie jar"/>
      </header>
      <h1>Sneaky Snacker</h1>
      <p> {isConnected ? "Client has successfully connected to server" : "Client is not connected. Please launch/check server"}</p>
      <Button variant="success" onClick={handleReady}>Click Here When Ready</Button> {' '}
      <p>{recentPayload.message}</p>
      <Button variant="info" onClick={() => setYesOrNoResponse('yes')}>Yes</Button>{' '}
      <Button variant="info" onClick={() => setYesOrNoResponse('no')}>No </Button>{' '}
      <p></p>
      <img src={sneakySnackers} id="snackers" alt="player characters Melis and dog Diego"/>
    </div>
  )  
};

export default App;