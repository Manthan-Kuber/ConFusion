import Main from "./components/MainComponent";
import "./App.css";
import { Component } from "react"; 
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      //Enclosed return statement in between <BrowserRouter></BrowserRouter> to make use of react router
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

// We need to define the state in here for which we need a constructor to do so
//Lifting the state up
