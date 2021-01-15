import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Community() {
	return (
		<>
			<Head>
			  <title>Community</title>
			</Head>

			<Navbar />

        <h2><center>Tell us, what's on your mind?</center> </h2>
        <p><center>Don't worry, you don't have to log in to post, let it out</center></p>
        <p><center>Please be respectful though! We are all here trying to help :)</center></p>

          <form action="./app">
          <div class="form-control">
         <center> <label for="username" style={{marginTop: "50px"}}>Topic: </label></center>
         <center> <input 
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Mental Health Topic..."
                  required
          /></center>
       
          <div class="row">
                  <p><center>Post:</center></p>
                       <center><textarea placeholder="Enter your post" required id="initial_status" rows="3"></textarea>
                       </center>       
                       </div>
          </div>

  
          <center>  <button type="submit" class="btn" style={{width: "100px", fontSize: "14px", border: "none", backgroundColor: "black", borderRadius: "5px", marginTop: "50px", padding: "10px", color: "white"}}>Post</button></center>
  </form>
		</>
	);
}

export default Community;