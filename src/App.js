import React, { Component } from 'react';
import SECRET_KEY from './config.js';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/header';
import VerticalSlider from './components/VerticalSlider';
import Login from './views/Login';
import Logout from './views/Logout';
import Record from './views/Record';
import Register from './views/Register';


let jwt = require('jsonwebtoken')


class App extends Component {
  constructor() {
  super();

  this.state = {
    logged_in: false,
    token: '',
    username: ''
  }
}

//probably be another funciton that saves the data...
//honestly should be working with states

handleLogin = async(e) => {
  e.preventDefault();

  let email = e.target.elements.email.value
  let password  = e.target.elements.pass.value

  const URL = 'http://127.0.0.1:5000/authenticate/login';


  let token = jwt.sign(
    { 'email': email, 'password':password},
    SECRET_KEY,
    {expiresIn: '1h'}
  );




  let response = await fetch(URL, {

    'headers': {
      'Content-Type': 'application/json',
      'token': token,

    }
  });

  const URL2 = 'http://localhost:5000/api/retrieve'


  let response2 = await fetch(URL2, {
    "method": "GET",
      "headers": {

        'Content-Type': "application/json",
        "email": email
    }
  });

  let data2 = await response2.json()
  // alert(data2)
  // console.log(data2)
  let data = await response.json()

  localStorage.setItem("id", data2["user"][0]["id"])

  let user_id = data2['user'][0]['id']
  //
  console.log('THIS IS DATA')
  console.log(data);
  console.log('THIS IS USER')
  console.log(user_id);
  // console.log(data2["user"]["id"]);

  //setup message saying logged in the water is fine or error

  if (data.message == 'success') {
    this.setState({ 'logged_in' : true , 'token': data.token });

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username)
    localStorage.setItem('sleep',5)
    localStorage.setItem('nutrition',5)
    localStorage.setItem('hydration',5)
    localStorage.setItem('family',5)
    localStorage.setItem('friends',5)
    localStorage.setItem('intimate',5)
    localStorage.setItem('vigorous',5)
    localStorage.setItem('movement',5)
    localStorage.setItem('standing',5)
    localStorage.setItem('work',5)
    localStorage.setItem('creative',5)
    localStorage.setItem('meditation',5)
    localStorage.setItem('substance',5)
    localStorage.setItem('unhealthy',5)
    localStorage.setItem('self-harm',5)
    localStorage.setItem('mental',5)

    alert('You are now logged in. The water is fine.')
  } else {
    alert(data.message)
  }
}

handleRegister = async(e) => {
  e.preventDefault();

  let email = e.target.elements.email.value
  let password  = e.target.elements.password.value
  let username = e.target.elements.username.value



  const URL = 'http://127.0.0.1:5000/authenticate/register';

  // encrypt a token with the proper payload info to send to our api

  let token = jwt.sign(
    {
      'email': email,
      'password':password,
      'username': username,
   },
    SECRET_KEY,
    {expiresIn: '1h'}
  );

  console.log(token);

  // send the token to register the user_id
  let response = await fetch(URL, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'token': token
    }
  });

  let data = await response.json()

  //set up a message that says registered or error

  if (data.message == 'success') {
    alert('You are now registered!')
  } else {
    alert(data.message)
  }
}


handleLogout = async() => {

  this.setState({ 'logged_in' : false})

}

  render(){
    return (
      <div className="App">
        <Header logged_in={this.state.logged_in} />


        <div className="container">
          <Switch>


            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/Login' render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/Record' render={() => <Record/>}/>
            <Route exact path='/Register' render={() => <Register handleRegister={this.handleRegister}/>}/>
            <Route exact path='/Logout' render={() => <Logout handleLogout={this.handleLogout}/>}/>


          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
