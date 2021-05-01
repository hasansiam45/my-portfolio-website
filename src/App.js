import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';



function App() {
  return (

    <div>
      <Router>
        
        <Switch>
          
          <Route path="/home">
          <Home></Home>
          </Route>

          <Route path="/contact">
          <Contact></Contact>
          </Route>
          
          
          <Route path="/projects">
          <Projects></Projects>
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
