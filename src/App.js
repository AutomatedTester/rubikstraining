import React from 'react';
import './App.css';
import generateScramble from 'scramble-generator';
import {Card, Nav, Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <link
      rel = "stylesheet"
      href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin = "anonymous" />
      <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Cube Training</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/training">Training</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Combinations} />
      <Route path="/training" component={Training} />
      </Router>
    </div>
  );
}

class Combinations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let optsLength = e.target.options.length;
    let opts = [], opt;
    for (let i = 0; i < optsLength; i++) {
      opt = e.target.options[i];
      if (opt.selected) {
        opts.push(opt.value);
      }
    }

    this.setState({
      value: e.target.value
    })
  }

  render() {
    return  (<Card>
              <Card.Title>Scramble</Card.Title>
              <Card.Body>{generateScramble()}</Card.Body>
            </Card>
    );
  }
}
class TrainingScramble extends React.Component {

  render() {
    return "scramble"
  }
}
class Training extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let optsLength = e.target.options.length;
    let opts = [],
      opt;
    for (let i = 0; i < optsLength; i++) {
      opt = e.target.options[i];
      if (opt.selected) {
        opts.push(opt.value);
      }
    }

    this.setState({
      value: e.target.value
    })
  }

  render() {
    let setup = {
      "olldot": "F R U R' U' F' f R U R' U' f'",
      "olll": "f R U R' U' f'",
      "ollline": "F R U R' U' F'",
      "plldiagcorner": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "plladjacentcorner": "R U R' U' R' F R2 U' R' U' R U R' F'"
    };
    return (
      <div>
        <select onChange = {this.handleChange}>
        <optgroup label="OLL">
          <option value = "olldot"> dot </option>
          <option value = "olll"> L </option>
          <option value = "ollline"> line </option>
        </optgroup>
        <optgroup label="PLL">
          <option value="plldiagcorner">Diagonal Corner Swap</option>
          < option value = "plladjacentcorner">Diagonal Corner Swap</option>
        </optgroup>
        </select> <div> <TrainingScramble>Scramble</TrainingScramble> </div> </div>
    );
  }
}

export default App;
