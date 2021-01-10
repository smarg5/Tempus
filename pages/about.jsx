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
				  <p className="description">
Our Tempus team is dedicated to building a safe digital place for your mental health.</p>
<div id="cubeContainer">
	<div id="cubeWrapper">
		<div class="head">
			<h1>MEET THE TEAM</h1>
		</div>
		<div class="container">
   <div class="card card--split-1">
    <div class="card__pic">
     <span class="card__placeholder">
	 <img src="../images/kate.png" width="100px" height="100px"></img></span>
    </div>
    <h2 class="card__headline">Abhik</h2>
    <h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-2">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline">Anna</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-3">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline">Kate</h2>
	<h5 class="card__subheading">Product Manager</h5>
   </div>
   <div class="card card--split-4">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline">Nandini</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-5">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline">Pavitra</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-6">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline card__headline--centered">Shivasree</h2>
    <h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-3">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline card__headline--centered">Simone</h2>
    <h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-8">
    <div class="card__pic">
     <span class="card__placeholder">
    Image here
   </span>
    </div>
    <h2 class="card__headline">Vinay</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
  </div>
  </div>
  </div>
  </div>
  </div>
			</section>
		</>
	);
}

export default About;