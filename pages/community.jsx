import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Community() {
	return (
		<>
			<Head>
			  <title>About Us</title>
			</Head>

			<Navbar />

                        <section className="flex-col mx-auto" style={{marginTop: "75px"}}>
      
        <div className="text-center font-semibold text-4xl mx-auto" style={{border: "1px solid lightblue", borderRadius: "15px", height: "400px", padding:"75px 0 0 0"}}>
        <p className="description">
				  <center>Enter your annoymous username to enter your chatroom. Please be respectful.</center>
			      </p>
          <form action="./chat">
          <div class="form-control">
         <center> <label for="username" style={{marginTop: "50px"}}>👥 Annoymous Username: </label></center>
         <center> <input style={{border: "1px solid", borderRadius: "15px", marginLeft: "30px"}} 
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  required
          /></center>
          <br></br>
          </div>
          <div class="form-control">
                  <center><label for="room"style={{}}>🏡 Choose your Chat Room:</label></center>
                 <center><select name="room" id="room" style={{border: "1px solid", borderRadius: "15px", marginLeft: "30px", width: "300px"}}>
                          <option value="friends">Make friends</option>
                          <option value="vent">Vent</option>
                          <option value="advice">Advice</option>
                          <option value="Music">Music</option>
                          <option value="Gaming">Gaming</option>
                  </select></center> 
          </div>
          <center>  <button type="submit" class="btn" style={{width: "500px", backgroundColor: "lightblue", borderRadius: "15px", marginTop: "50px"}}>Join Chat</button></center>
  </form>
        </div>
      </section>
		</>
	);
}

export default Community;