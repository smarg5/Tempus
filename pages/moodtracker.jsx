import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function MoodTracker() {
	return (
		<>
			<Head>
			  <title>Mood Tracker</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Mood Tracker</h1>
			      <p className="description">
                    Mood Tracker
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default MoodTracker;