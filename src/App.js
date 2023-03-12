import React, { useEffect, useState } from 'react';
// import GameEffects from './GameEffects';
import { socket } from './socket';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [payload, setPayload] = useState({});
  // const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleConnect() {
      setIsConnected(true)
      console.log("handleConnect has been triggered");
    }

    function handleDisconnect() {
      setIsConnected(false);
      console.log("handleDisconnect has been trieggered");
    }

    // theses are our listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("questionsReady", (payload) => console.log(payload));

    // clean up the socket listeners

    return () => {
      // turns off socket listeners 
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("response", () => console.log("response listener is off"));
    };
    }, [payload.message]);

  // Todo:  get rid of the ready button after click
  //   const removeElement = () => {
  //   setVisible((prev) => !prev); 
  // }

    const handleReady = () => {
      socket.emit("childReady");

      // removeElement();
    };
  
  // const handleInput = () => {  // radio button value didn't like function call within braces
  //   socket.emit("Yes");
  // }

  // const handleSelection = (answer) => {
  //   socket.emit("Yes");
  // };

  return (
    <div>
      <p> Is connected? {isConnected ? "true" : "false"}</p>
      <button onClick= {handleReady}>Ready</button>

      <p>{payload.message}</p>
      
      <input type="radio" value={"Yes"} /> Yes 
      {/* <input type="radio" value={"No"} /> No */}
     
   {/* <GameEffects/> */}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;