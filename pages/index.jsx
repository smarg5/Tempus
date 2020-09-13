import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import cookie from 'js-cookie';

export default function Home(props) {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
     {loggedIn && (
      <>
       <p>Welcome {data.email}!</p>
        
        <button
          onClick={() => {
            cookie.remove('token');
            revalidate();
          }}>
          Logout
        </button>
      </>
    )}

{!loggedIn && (
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <br></br>
            <h1 className="title">Hi there, 
            <br></br>Welcome to Tempus <span class="wave">👋</span>
          
            </h1>
            <p className="description">Join our supportive community of anxiety. You are not alone anymore.</p>

            <Link href="/about"><a className="cta">Learn More</a></Link>
          </div> </div>

         
        <>
          <Link href="/login">Login</Link>
          <p>or</p>
          <Link href="/signup">Sign Up</Link>
        </>
      
      </section>
      )}
    </>
  );
}



