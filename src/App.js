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
import About from './About/About';
import Blog from './Blog/Blog';



function App() {
  return (

      <Router>
        
        <Switch>
          
          <Route path="/home">
          <Home></Home>
          </Route>
          
          <Route path="/about">
          <About></About>
          </Route>

          <Route path="/contact">
          <Contact></Contact>
          </Route>
          
          
          <Route path="/projects">
          <Projects></Projects>
          </Route>
          
          <Route path="/blog">
          <Blog></Blog>
          </Route>
          
           <Route exact path="/">
          <Home></Home>
          </Route>
          
        </Switch>
        
      </Router>
    

    
  );
}

export default App;
