import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';



function App() {
  return (

    <div>
      <Router>
        
        <Switch>
          
          <Route path="/home">
          <Home></Home>
          </Route>
          
           <Route exact path="/">
          <Home></Home>
          </Route>
          
        </Switch>
        
      </Router>
    
    </div>
    
  );
}

export default App;
