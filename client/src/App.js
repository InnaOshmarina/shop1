import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/Auth/actions';
import { Provider } from 'react-redux';
import store from './store/store';
import {NotificationContainer} from 'react-notifications';

import PrivateRoute from './components/shared/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ProtectedLayout from './components/layout/ProtectedLayout';
import './css/App.css';
import {TOKEN_NAME_IN_STORE} from "./constans/GlobalConstans";
import ProductCatalog from "./components/product/ProductCatalog";
import Checkout from "./containers/basket/Checkout";
import ProductDetails from "./components/product/ProductDetails";

// Check for token
if (localStorage[TOKEN_NAME_IN_STORE]) {
    // Set auth token header auth
    setAuthToken(localStorage[TOKEN_NAME_IN_STORE]);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage[TOKEN_NAME_IN_STORE]);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = '/login';
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                      <Navbar />
                      <Route exact path="/" component={Landing} />
                      <div className="container">
                          <NotificationContainer />
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/login" component={Login} />
                          <Switch>
                              <Route path="/product-catalog" component={ProductCatalog} />
                          </Switch>

                          <Route path="/products/detail/:id" component={ProductDetails}/>

                          <Switch>
                              <Route path="/checkout" component={Checkout} />
                          </Switch>
                      </div>
                      <Switch>
                          <PrivateRoute path="/" component={ProtectedLayout} />
                      </Switch>
                      <Footer />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
