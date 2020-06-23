import React, { useState, useEffect, useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/access_components/SignIn';
import SignUp from './components/access_components/SignUp';
import Navbar from './components/partials_components/Navbar';
import Home from './components/main_components/Home';
import UserContext from './UserContext';
const App = () => {
  const context = useContext(UserContext);
  const [, setUserData] = useState();
  useEffect(() => {
    context.updateUserData = setUserData;
  }, [context.updateUserData]);

  return (
    <Router>
      <div className='App col-12'>
        <Switch>
          <Route exact path='/' render={() => <SignIn />}></Route>

          {sessionStorage.getItem('user') &&
            sessionStorage.getItem('user') !== 'null' && (
              <Route exact path='/' render={() => <Home />}></Route>
            )}
          <Route exact path='/home' render={() => <Home />}></Route>
          <Route exact path='/sign-up' render={() => <SignUp />}></Route>
          <Route exact path='/sign-in' render={() => <SignIn />}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
