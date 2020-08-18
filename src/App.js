'https://learn.lambdaschool.com/web3/module/recQlbCZf9tOVgiXC/'
import React, { useEffect } from 'react';
import './App.css';
import { axiosWithAuth } from './api/axiosWithAuth';
import {Route, Link} from 'react-router-dom'
import {PrivateRoute} from './component/PrivateRoute'
import Login from './component/Login'
import Protected from './component/Protected'
import Public from './component/Public'
 
function App() {
  // etc
  useEffect(() => {
    debugger
    axiosWithAuth().get('endpoint/path/here')
    .then(data => /* do something with the data */ null);
  }, [])

  return (
    <div>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='/protected' component={Protected} />
    </div>
  );
}

export default App;
