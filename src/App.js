import React, { useEffect, useState } from 'react';
import EffectDemo from './EffectDemo';
import { socket } from './socket';

const App = () => {
  const [isConnect, setIsConnected] = useState(false);

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
    socket.on("rsponse", (payload) => console.log(payload));

    // clean up the socket listeners
    return () => {
      // turns off socket listeners
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("response", () => console.log("response listener is off"));
    };
  });

    const handleHello = () => {
      socket.emit("hello");
    };

  return (
    <div>
      <p> Is connected? {isConnected ? "true" : "false"}</p>
      <button onClick={handleHello}>Say hello</button>
    </div>
  );
}



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