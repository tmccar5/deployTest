import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path="/" component={Books} />
      </Router>
    </div>
  );
}

export default App;


