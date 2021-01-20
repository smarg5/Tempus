import Link from 'next/link';
import Navbar from './components/Navbar';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import moodStyles from '../styles/moodtracker.module.scss'
import useSWR from 'swr';
import cookie from 'js-cookie';
import { useSession } from 'next-auth/client';

export default function Home(props) {


  const [ session, loading ] = useSession()
  console.log(session, "aslkdfjas")

  let currentsession = session

  if (typeof window !== 'undefined' && loading) return null
  let loggedIn = false;
  // if (!session) {
  //   // loggedIn = true;
  // }
  // console.log(session.user.name)
  let name = session ? session.user.name : ""



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
     {/* {loggedIn && (
      <>
       <p>Welcome {name}!</p>
        
        <button
          onClick={() => {
            cookie.remove('token');
            revalidate();
          }}>
          Logout
        </button>
      </>
    )} */}

{!loggedIn && (
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
          <div className={moodStyles.splitScreen}>
          <div className="dayswrapper w-full">


          <br></br>
<br></br>
            <h1 className="title">Hi there, {name.split(" ")[0]}
            <br></br>Welcome to Tempus <span class="wave"></span>
          
            </h1>
            <p className="description">Join our supportive community. You are not alone!</p>
            <p className="description">Interact with our mood tracker, community platform, therapist locator. Sign up to store your information.</p>

            <Link href="/about"><a className="cta">Learn More</a></Link>
          </div> </div>
          </div>     <div className={moodStyles.flexRow}>
          <img className="landingImage" src="/images/STOCK.png" alt="me" width="490" height="350" />
</div>
     
</div>
         
        {/* <>
          <Link href="/login">Login</Link>
          <p>or</p>
          <Link href="/signup">Sign Up</Link>
        </> */}
      
      </section>
      )}
    </>
  );
}



