import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About Us</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About Us</h1>
			      <p className="description">
				  Tempus. In latin it means Time. As Tempus, we strive to create an healthy ecosystem where it is encouraged to share their experiences and build connections through authenticity. 
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;