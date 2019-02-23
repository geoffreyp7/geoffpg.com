import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import ContactSection from './Components/ContactSection/ContactSection';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={AboutSection} />
              <Route exact path='/projects' component={ProjectSection} />
              <Route exact path='/contact' component={ContactSection} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
