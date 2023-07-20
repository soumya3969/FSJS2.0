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
      <div className="main">
        <img src={Logo} alt="logo" className="logo" width="100" height="100" />
        <h1 className="app-title">LCO Todo App</h1>
        <div className="container">
          Add an Item .....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Enter a Item ...."
          />
          <button className="add-btn">Add Todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" id="" checked />
                List ! &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn">Delete</button>
                {/* <div class="checkbox-wrapper-11">
                  <input id="02-11" type="checkbox" name="r" value="2" />
                  <label for="02-11">To-do</label>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
