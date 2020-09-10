import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Therapist() {
	return (
		<>
			<Head>
			  <title>Therpaists</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Local Therapists</h1>
			      <p className="description">
HI
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Therapist;