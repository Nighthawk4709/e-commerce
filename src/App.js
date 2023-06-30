import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router'
import Home from "./components/home/home";

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add other routes for different pages */}
        </Switch>
      </Router>
    );
  };
  
  export default App;