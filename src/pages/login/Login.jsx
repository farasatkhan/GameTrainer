import "./login.css"
import loginImage from '../../images/login_image.jpg'
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import axios from 'axios';
 
export default class Login extends Component {
    constructor(props) {
        super(props);
  
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {usersList: []};
    }

    componentDidMount() {
      axios.get('http://localhost:5000/users')
        .then(response => {
          this.setState({ usersList: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
      this.setState({
          password: e.target.value
      })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
          email: this.state.email,
          password: this.state.password
        }

        // console.log(user);

        // console.log(this.state.usersList);

        // console.log(this.state.usersList[0].email);

        var authenticated = -1;

        for(let i=0; i < this.state.usersList.length; i++)
        {
          if((this.state.usersList[i].email.indexOf(user.email) !== -1) && this.state.usersList[i].password.indexOf(user.password) !== -1)
          {
            authenticated = 1;
            
          }
        }

        this.setState({
            email: '',
            password: ''
        })

        if(authenticated === 1)
        {
          window.location = '/home';
        }
        else
        {
          window.location = '/notfound';
        }
    }

    render() {
        return (
          <>
            <div className="loginImgDiv">
                <img className="loginImg" src={loginImage} alt="login"></img>
            </div>
            <div className="loginNewUser">
              <form className="loginNewUserForm" onSubmit={this.onSubmit}>
                <h1 className="loginNewUserTitle">Game Trainer</h1>
                <div className="loginNewUserItem">
                  <input type="email" placeholder="Email Address" required value={this.state.email} onChange={this.onChangeEmail}/>
                </div>
                <div className="loginNewUserItem">
                  <input type="password" placeholder="Password" required value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <button className="loginNewUserButton">Login</button>
                <br/>
                <br/>
                <Link to="/signup" class="loginAlreadyAccount" >Don't Have an account? Sign up</Link>
              </form>
            </div>
          </>
        )
    }
}

