import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavigationBar } from './components/navigationBar';
import { UserPage } from './components/userPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/user" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
