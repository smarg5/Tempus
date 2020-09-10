import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <br></br>
            <h1 className="title">Hi there, 
            <br></br>Welcome to Tempus <span class="wave">👋</span>
          
            </h1>
            <p className="description">Join our supportive community of anxiety. You are not alone anymore.</p>

            <Link href="/about"><a className="cta">Learn More</a></Link>
          </div>


        </div>
      </section>
    </>
  );
}

export default Home;