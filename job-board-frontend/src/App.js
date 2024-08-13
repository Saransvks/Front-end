import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ApplyJobForm from './components/ApplyJobForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/apply" component={ApplyJobForm} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;

