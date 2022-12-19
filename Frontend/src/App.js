// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import { useNavigate } from "react-router-dom";

// import { Button } from 'react-bootstrap';

// import Login from "./pages/Login";

// import { BrowserRouter as Router, Link } from 'react-router-dom';

// // import { Link } from 'react-router-dom';
// // import Button from './Button';


// function App() {
//   const navigate = useNavigate();
//   const navigateTo = () => navigate('/pages/Login');

//   return (
//     <div className="entry">
//       <span className="async">async</span>
//       <span className="tic-tac-toe">tic tac toe</span>
//       <button className="rectangle-28" onClick={navigateTo}>Login</button>
//       <button className="rectangle-28-1">Register</button>
//     </div>
//   );
// }

// export default App;












// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import { useHistory } from "react-router-dom";

// import { Button } from 'react-bootstrap';

// import Login from "./pages/Login";

// import { BrowserRouter as Router, Link } from 'react-router-dom';

// // import { Link } from 'react-router-dom';
// // import Button from './Button';


// function App() {

//   const history = useHistory();
//   const navigateTo = () => history.push('./pages/Login');//eg.history.push('/login');

//   return (
//     <><div className="entry">
//       <span className="async">async</span>
//       <span className="tic-tac-toe">tic tac toe</span>
//       <button className="rectangle-28" onClick={navigateTo}> Login</button>
//       <button className="rectangle-28-1">Register</button>
//     </div ></>
//   );
// }

// export default App;









import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Login";
import Contact from "../src/pages/Register";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Entry from "./pages/Entry";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};