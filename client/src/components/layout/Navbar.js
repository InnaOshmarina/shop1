import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/Auth/actions';

import '../../css/Navbar.css';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

  render() {
      const { isAuthenticated, user } = this.props.auth;

      let layout = classNames({
          'container-fluid': isAuthenticated,
          'container': !isAuthenticated
      });

      const productCatalog = (
          <li className="nav-item">
              <Link className="nav-link mr-4" to="/product-catalog">
                  {' '}
                  Product catalog
              </Link>
          </li>
      );

      const checkout = (
          <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                  {' '}
                    <i className="fas fa-shopping-cart" />

              </Link>
          </li>
      );

      const authLinks = (
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a
                      href=""
                      onClick={this.onLogoutClick.bind(this)}
                      className="nav-link"
                  >
                      <img
                          className="rounded-circle"
                          src={user.avatar}
                          alt={user.name}
                          style={{ width: '25px', marginRight: '5px' }}
                          title="You must have a Gravatar connected to your email to display an image"
                      />{' '}
                      Logout
                  </a>
              </li>
          </ul>
      );

      const guestLinks = (
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/register">
                      Sign Up
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/login">
                      Login
                  </Link>
              </li>
          </ul>
      );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className={layout}>
          <Link className="navbar-brand" to="/">
            Shop1
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
                { !isAuthenticated ? productCatalog : null }
                { !isAuthenticated ? checkout : null }
            </ul>
            { isAuthenticated ? authLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
