import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Store from './components/stock/Store';
import Stock from './components/stock/Stock';
import Catagory from './components/stock/Catagory';
import Products from './components/stock/Products';
import AddProduct from './components/stock/AddProduct';
import EditProduct from './components/stock/EditProduct';
import Home from './components/stock/Home';
function App() {
 

  return (
    <>
      <Router>
        
      
        
        <Switch>
        
          <Route path='/navbar' component={Navbar} />
          <Route path='/login' component={ Login } />
          <Route path='/' exact component={ Home } />
          <Route path='/register' component={Register} />
          <Route exact path="/forgot" component={ForgotPassword}/>
          <Route exact path="/resetpassword/:id" component={ResetPassword}/>
          {/* <Route exact path="/stock" component={Stock}/> */}
          <Route exact path="/store" component={Store}/>
          <Route exact path="/catagory" component={Catagory}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/addproduct" component={AddProduct}/>
          <Route exact path="/editproduct" component={EditProduct}/>

        </Switch>
       
      </Router>
    </>
  );
}

export default App;
