import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  //call api
  fetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      if (data && data.error) {
        setLoginError(data.message);
      }
      if (data && data.token) {
        //set cookie
        cookie.set('token', data.token, {expires: 2});
        Router.push('/');
      }
    });
}
    return (
      <>
      <Head>
        <title>Log In</title>
      </Head>

      <Navbar />

      <section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Log In</h1>
		      </div>
	      </div>
	
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>

      <br/>
      
      <label htmlFor="Password">
        Password
     <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       </label>

      <input type="submit" value="Submit" />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </form>
    </section>
    </>
    );
}

export default Login;
    
  