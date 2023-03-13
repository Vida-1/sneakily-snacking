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
  const [yesOrNoResponse, setYesOrNoResponse] = useState(null);
  const [visible, setVisible] = useState(true);

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


      const removeElement = () => {
        setVisible((prev) => !prev);
        };
    
        const handleReady = () => {
        socket.emit("childReady");
        removeElement();
        //display the yesOrNoResponse buttons
        };

       function startGame(yesOrNoResponse) {
       if (yesOrNoResponse = 'yes') 
         console.log("Now I'm gonna tell the server to start the game!");
         socket.emit("selection")
        // socket.emit("Start the game!!")
       }

          return (
          <div>
          <header>
            <img src={cookies} id="cookies" alt="tipped cookie jar"/>
           </header>
           <h1>Sneaky Snacker</h1>

           <p> {isConnected ? "Client has successfully connected to server" : "Client is not connected. Please launch/check server"}</p>
           {visible && (
          <Button variant="success" id="button" onClick={handleReady}>Click Here When Ready</Button> 
        )}

        <p>{recentPayload.message}</p>

      {/* Note to self: This is where I left off: trying to get the yesOrNoResponse buttons to appear in conjunction with the handleReady (line 45) function's "childReady" emit. Experimenting with creating a startGame function (line 50). Reminder, don't forget to put the yesOrNoResponse dependency array back when all is done.
       */}
      {!visible && (
        <Button variant="info" id="button" onClick={() => {
          setYesOrNoResponse('yes');
          startGame();
          removeElement();
          }
        }>Yes</Button>
      )}
      {!visible && (        
        <Button variant="info" id="button" onClick={() => {
          setYesOrNoResponse('no');
          removeElement();
        }
        }>No </Button>
      )}
      

              
      <br /> 
      <img src={sneakySnackers} id="snackers" alt="player characters Melis and dog Diego"/>
    </div>
  )   // this ends the on-mount useEffect method
};  // this ends the App function

export default App;