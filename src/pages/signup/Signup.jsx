import "./signup.css";
import signupImage from '../../images/signup_image.jpg';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        email: '',
        password: '',
        score: 0,
        percentage: 0
      }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        score: 0,
        percentage: 0
      }

      console.log(user);

      axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

      this.setState({
          username: '',
          email: '',
          password: ''
      })

      window.location = '/login';
  }

  render() {
      return (
        <>
          <div className="signupImgDiv">
              <img className="signupImg" src={signupImage} alt="registration"></img>
          </div>
          <div className="signupNewUser">
            <form className="signupNewUserForm" onSubmit={this.onSubmit}>
              <h1 className="signupNewUserTitle">Game Trainer</h1>
              <div className="signupNewUserItem">
                <input type="text" placeholder="Name" required value={this.state.username} onChange={this.onChangeUsername}/>
              </div>
              <div className="signupNewUserItem">
                <input type="email" placeholder="Email Address" required value={this.state.email} onChange={this.onChangeEmail}/>
              </div>
              <div className="signupNewUserItem">
                <input type="password" placeholder="Password" required value={this.state.password} onChange={this.onChangePassword}/>
              </div>
              <div className="signupNewUserItem">
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button className="signupNewUserButton">Sign up</button>
              <br/>
              <br/>
              <Link to="/login" class="signupAlreadyAccount" >Already Have an account? Login</Link>
            </form>
          </div>
        </>
      )
  }
}
