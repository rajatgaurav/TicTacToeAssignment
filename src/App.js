import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';

import Login from "./pages/Login";

import { BrowserRouter as Router, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom'
// import Button from './Button'


function App() {
  return (
    <><div className="entry">
      <span className="async">async</span>
      <span className="tic-tac-toe">tic tac toe</span>
      <Button className="rectangle-28" variant="btn btn-success" onClick={() => ('Login') > Login}></Button>
      <button className="rectangle-28-1">Register</button></>
    </div >

    // <Router>
    //   <div>
    //     {/* 👇️ react router link */}
    //     <Link to="/about">
    //       <button>Click</button>
    //     </Link>

    //     <br />
    //     <br />

    //     {/* 👇️ Anchor link */}
    //     <a href="https://google.com" target="_blank" rel="noreferrer">
    //       <button>Click</button>
    //     </a>
    //   </div>
    // </Router>
  );
}

export default App;
