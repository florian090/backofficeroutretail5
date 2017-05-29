import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { acLogIn } from "./components/actions/acLogIn";

import Header from "./components/theme/Header";
import Sidebar from "./components/theme/Sidebar";
import Main from "./components/theme/Main";
import PopTest from "./components/theme/PopTest";
// import PopUp from "./components/theme/PopUp";
import Alert from "./components/theme/Alert";



class BasicExample extends React.Component {
  // const BasicExample = () => (
  constructor() {
    super();
    this.state = {
      login: '',
      pass: '',
    };
  }


  changeUser(e) {
    this.setState({ login: e.target.value });
  }
  changePass(e) {
    this.setState({ pass: e.target.value });
  }
  login() {
    this.props.acLogIn(this.state.login, this.state.pass);
  }

  render() {
    // console.log(this.props);
    if (this.props.logIn === false) {
      return (
        <Router>
          <div className="container">
            <PopTest />
            {/* <PopUp />*/}
            <Alert />
            <Header />
            <Sidebar />
            <Main />
          </div>
        </Router>
      )
    }
    else {
      return (
        <div className="login-bg">
          <div className="con-login-bg">
            <div className="logo"><img className="logo-app" src={`${process.env.PUBLIC_URL}/img/FUN_BBET.png`} alt="logo" /></div>
            <div className="con-login">
              <div className="con-login-header">
                <h1>LOGIN FORM</h1>
              </div>
              <div className="con-login-body">
                <div className="login-input"><div className="login-input-img user"></div><input placeholder="Username" type="text" value={this.state.login} onChange={this.changeUser.bind(this)} /></div>
                <div className="login-input"><div className="login-input-img pass"></div><input placeholder="Password" type="password" value={this.state.pass} onChange={this.changePass.bind(this)} /></div>
                <div className="forgot">
                  <div className="left">Forgot password?</div>
                  <div className="right"><input type="checkbox" name="" value="" />Remember me</div>
                </div>
                <div className="login-but" onClick={this.login.bind(this)}>Login</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    logIn: state.logIn
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    acLogIn: acLogIn
  }, dispatch)
}

// export default App;
export default connect(mapStateToProps, matchDispatchToProps)(BasicExample);
