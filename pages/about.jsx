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
				  Tempus.  
			      </p>
            <p className="description">
				  In latin this means Time. The tempus team strives to create a healthy ecosystem where it is encouraged to share one's experiences and build connections through authenticity. 
			      </p>
				  <p className="description">
           Our team is dedicated to building a platform for people of all ages to share and track their experiences and provide resources regarding mental health. 
           </p>
<div id="cubeContainer">
	<div id="cubeWrapper">
		<div class="head">
			<h1>MEET THE TEAM</h1>
      <p className="description">
      We are a group of student developers who wanted to create a safe digital place for your mental health. Check us out!
      </p>
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
     <img src="/images/anna.png" alt="me" width="228" height="228" />
   </span>
    </div>
    <h2 class="card__headline">Anna</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-3">
    <div class="card__pic">
     <span class="card__placeholder">
    <img src="/images/kate.png" alt="me" width="228" height="228" />
   </span>
    </div>
    <h2 class="card__headline">Kate</h2>
	<h5 class="card__subheading">Product Manager</h5>
   </div>
   <div class="card card--split-4">
    <div class="card__pic">
     <span class="card__placeholder">
     <img src="/images/aish.png" alt="me" width="228" height="228" />
   </span>
    </div>
    <h2 class="card__headline">Nandini</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-5">
    <div class="card__pic">
     <span class="card__placeholder">
     <img src="/images/pav.png" alt="me" width="228" height="228" />
   </span>
    </div>
    <h2 class="card__headline">Pavitra</h2>
	<h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-6">
    <div class="card__pic">
     <span class="card__placeholder">
     <img src="/images/shiv.png" alt="me" width="228" height="228" />
   </span>
    </div>
    <h2 class="card__headline card__headline--centered">Shivasree</h2>
    <h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-3">
    <div class="card__pic">
     <span class="card__placeholder">
   </span>
    </div>
    <h2 class="card__headline card__headline--centered">Simone</h2>
    <h5 class="card__subheading">Software Engineer</h5>
   </div>
   <div class="card card--split-8">
    <div class="card__pic">
     <span class="card__placeholder">
     <img src="/images/vinay.png" alt="me" width="232" height="232" />

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