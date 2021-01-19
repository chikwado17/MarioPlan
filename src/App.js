import React from 'react';
import Navbar from './components/layouts/Navbar';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
    </div>
  );
}

export default App;
