import React, { Component } from 'react';
import SECRET_KEY from './config.js';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/header';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';


// let jwt = require('jsonwebtoken')



class App extends Component {
  constructor() {
  super();

  this.state = {
    logged_in: false,
    token: '',
    username: ''
  }
}

// handleLogin = async(e) => {
//   e.preventDefault();
//
//   let email = e.target.elements.email.value
//   let password  = e.target.elements.pass.value
//
//   const URL = 'http://127.0.0.1:5000/authenticate/login';
//
//   let token = jwt.sign(
//     { 'email': email, 'password':password},
//     SECRET_KEY,
//     {expiresIn: '1h'}
//   );
//
//   let response = await fetch(URL, {
//
//     'headers': {
//       'Content-Type': 'application/json',
//       'token': token,
//
//     }
//   });
//
//   let data = await response.json()
//
//   console.log(data);
//
//   //setup message saying logged in the water is fine or error
//
//   if (data.message == 'success') {
//     this.setState({ 'logged_in' : true , 'token': data.token });
//
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('username', data.username)
//
//     alert('You are now logged in. The water is fine.')
//   } else {
//     alert(data.message)
//   }
// }
//
// handleRegister = async(e) => {
//   e.preventDefault();
//
//   let email = e.target.elements.email.value
//   let password  = e.target.elements.password.value
//   let username = e.target.elements.username.value
//
//
//
//   const URL = 'http://127.0.0.1:5000/authenticate/register';
//
//   // encrypt a token with the proper payload info to send to our api
//
//   let token = jwt.sign(
//     {
//       'email': email,
//       'password':password,
//       'username': username,
//    },
//     SECRET_KEY,
//     {expiresIn: '1h'}
//   );
//
//   console.log(token);
//
//   // send the token to register the user_id
//   let response = await fetch(URL, {
//     'method': 'POST',
//     'headers': {
//       'Content-Type': 'application/json',
//       'token': token
//     }
//   });
//
//   let data = await response.json()
//
//   //set up a message that says registered or error
//
//   if (data.message == 'success') {
//     alert('You are now registered!')
//   } else {
//     alert(data.message)
//   }
// }
//
//
// handleLogout = async() => {
//
//   this.setState({ 'logged_in' : false})
//
// }

  render(){
    return (
      <div className="App">
        <Header logged_in={this.state.logged_in} />

        <div className="container">
          <Switch>


            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/Login' render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/Register' render={() => <Register handleRegister={this.handleRegister}/>}/>
            <Route exact path='/Logout' render={() => <Logout handleLogout={this.handleLogout}/>}/>


          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
