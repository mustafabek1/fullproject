import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Store from './components/stock/Store';
import Stock from './components/stock/Stock';
import Catagory from './components/stock/Catagory';
import Products from './components/stock/Products';

function App() {

  return (
    <>
      <Router>
        
      
        
        <Switch>

          <Route path='/' exact component={Navbar} />
          <Route path='/login' component={ Login } />
          <Route path='/register' component={Register} />
          <Route exact path="/forgot" component={ForgotPassword}/>
          <Route exact path="/resetpassword/:id" component={ResetPassword}/>
          <Route exact path="/stock" component={Stock}/>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/catagory" component={Catagory}/>
          <Route exact path="/products" component={Products}/>
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
