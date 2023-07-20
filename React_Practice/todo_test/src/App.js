import React from "react";
import Logo from "./logo.svg";
import "./App.css";

// function App() {
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={Logo} alt="logo" className="App-logo" />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="logo" className="logo" width="100" height="100" />
        <h1 className="app-title">Lco Todo app</h1>
        <div className="container">
          Add an Item .....
          <br/>
          <input
            type="text"
            className="input-text"
            placeholder="Enter a Item ...."
          />
          <
        </div>
      </div>
    );
  }
}

export default App;
