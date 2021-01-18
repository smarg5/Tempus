import Head from 'next/head'
import Navbar from './components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import loginStyles from '../styles/login.module.scss'
import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import { signIn } from 'next-auth/client'
import Axios from 'axios';

const SignUp = () => {
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (confirmPassword !== password) {
        return null;
    }
    // signIn('credentials', {username: password, password: password})
    //call api
    console.log(username + " " + password + " " + name)
    fetch('/api/auth/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
        name: name,
      }),
    })
    signIn('credentials', {email: username, password: password})
    Router.push('/')
    // Router.push('/login')
    //   .then((r) => {
    //     return r.json();
    //   })
    //   .then((data) => {
    //     if (data && data.error) {
    //       setLoginError(data.message);
    //     }
    //     if (data && data.token) {
    //       //set cookie
    //       cookie.set('token', data.token, {expires: 2});
    //       Router.push('/');
    //     }
    //   });
  }
    return (
      <>
      <Head>
        <title>Log In</title>
      </Head>

      <Navbar />

      <section className="hero">
			  <div className="container">
			    <div className={`text-wrapper w-full ${loginStyles.form}`}>
			      {/* <h1 className="title">My Account</h1> */}
            <div className={`${loginStyles.card} ${loginStyles.center}`} >
			      <h1 className="title" >Sign Up</h1>

            <h4 className={loginStyles.inputLabel}>Name</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              {/* Email */}
            <input
              name="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={loginStyles.textBox}
            />
            </label>

            <br/>
            <h4 className={loginStyles.inputLabel}>E-mail</h4>
            <label htmlFor="email">
              {/* Email */}
            <input
              name="email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={loginStyles.textBox}
            />
            </label>

            <br/>
            <br/>
            
            <h4 className={loginStyles.inputLabel}>Password</h4>
            <label htmlFor="Password">
              {/* Password */}
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={loginStyles.textBox}
            />
            </label>
            <br/>
            <h4 className={loginStyles.inputLabel}>Confirm Password</h4>
            <label htmlFor="Password">
              {/* Password */}
            <input
              name="confirmpassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={loginStyles.textBox}
            />
            </label>
            <br/>

            <input className="saveBtn" type="submit" value="Submit" />
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
          </form>
          <div className={loginStyles.redirect}>
            {"Already have an account? "}
            <a href="/login">Log in here!</a>
          </div>
            </div>
		      </div>
	      </div>
	
    </section>
    </>
    );
}

export default SignUp;
    
  