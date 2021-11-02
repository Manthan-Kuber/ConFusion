import Main from "./components/MainComponent";
import "./App.css";
import { Component } from "react"; 
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      //Enclosed return statement in between <BrowserRouter></BrowserRouter> to make use of react router
      //Provider makes the store available to all the components
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

// We need to define the state in here for which we need a constructor to do so
//Lifting the state up
