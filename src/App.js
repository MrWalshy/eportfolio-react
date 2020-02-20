import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/home.component';
import Projects from './components/projects.component';
import Contact from './components/contact.component';

function App() {
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eportfolio-react" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <footer className="bg-dark text-white container-fluid footer">
          <h6 className="mb-0 py-2">&copy; Copyright 2016</h6>
        </footer>
      </div>
    </Router>
  );
}

export default App;
