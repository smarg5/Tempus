import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import loginStyles from '../styles/login.module.scss'
import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import { signIn } from 'next-auth/client'

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    signIn('credentials', {email: email, password: password})
    Router.push('/')
    // //call api
    // fetch('/api/auth', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
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
			      <h1 className="title" >Login</h1>

            <form onSubmit={handleSubmit}>
            <h4 className={loginStyles.inputLabel}>E-mail</h4>
            <label htmlFor="email">
              {/* Email */}
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={loginStyles.textBox}
            />
            </label>

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

            <input className="saveBtn" type="submit" value="Submit" />
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
          </form>
          <div className={loginStyles.redirect}>
            {"Don't have an account? "}
            <a href="/signup">Sign up here!</a>
          </div>
            </div>
		      </div>
	      </div>
	
    </section>
    </>
    );
}

export default Login;
    
  