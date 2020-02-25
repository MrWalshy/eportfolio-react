import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/home.component';
import Projects from './components/projects.component';
import Contact from './components/contact.component';
import Admin from './components/admin.component';
import Register from './components/adminComponents/register.component';
import Login from './components/adminComponents/login.component';

class App extends Component {
  constructor() {
    super();

    this.loginHandler = this.loginHandler.bind(this);

    this.state = {
      // Checks session storage to see if user has logged in this session
      isAuthorised: sessionStorage.getItem('isAuthorised') || false
    }
  }

  loginHandler() {
    // Sets isAuthorised to true in App state and in session storage
    this.setState({ isAuthorised: true});
    sessionStorage.setItem('isAuthorised', true);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
              <Navbar.Brand href="#">Morgan Walsh</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar" />
              <Navbar.Collapse id="navbar">
                <Nav className="ml-auto" id="navbarNav">
                  <Nav>
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/projects"} className="nav-link">
                      Projects
                    </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/contact"} className="nav-link">
                      Contact
                    </Link>
                  </Nav>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          {/* Accessible Routes */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/eportfolio-react" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/admin"><Admin isAuthorised={this.state.isAuthorised} loginHandler={this.loginHandler}></Admin></Route>
          </Switch>

          <footer className="bg-dark text-white container-fluid footer">
            <h6 className="mb-0 py-2">&copy; Copyright 2020</h6>
          </footer>
        </div>
      </Router>
  )};
}

export default App;
