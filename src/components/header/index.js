import React, { Component } from 'react';

import './index.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render(){

    console.log(this.props.logged_in, 'state storage');
    return (
      <div className="Header">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">TAO</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
            </li>

            {
              this.props.logged_in === true &&

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Record">Record</NavLink>
                </li>

            }

          </ul>
          <ul className="navbar-nav ml-auto">



          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Login</NavLink>
          </li>



          {
            this.props.logged_in === false &&

              <li className="nav-item">
                <NavLink className="nav-link" to="/Register">Register</NavLink>
              </li>

          }


          {
            this.props.logged_in === true &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/Logout">Logout</NavLink>
              </li>
          }

          </ul>






        </div>
      </nav>



      </div>
    );
  }
}

export default Header;
