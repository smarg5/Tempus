import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Chat() {
	return (
		<>
			<Head>
			  <title>Chat</title>
			</Head>

			<Navbar />
            <section className="flex-col mx-auto">
        <div className="text-center font-semibold text-4xl mx-auto" style={{border: "1px solid lightblue", borderRadius: "15px", height: "140%", padding:"95px 0 70px 0"}} >

        <main class="chat-main" >
        <div class="chat-sidebar">
       <center><h3><i class="fas fa-comments"></i> Room Name:</h3></center> 
          <h2 id="room-name" style={{fontWeight: "normal"}}></h2>
        <center>  <h3><i class="fas fa-users"></i> Users:</h3></center>
          <ul id="users" style={{fontWeight: "normal", marginBottom: "100px"}}></ul>
        </div>
        <div class="chat-messages"></div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
        <center><input style={{border: "1px solid", borderRadius: "15px", marginLeft: "30px", width: "500px"}}
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          /></center>  <br></br>
         <center> <button class="btn" style={{width: "150px", backgroundColor: "lightblue", borderRadius: "15px", marginLeft: "50px"}}><i class="fas fa-paper-plane"></i> Send</button></center>
        </form>
      </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
      integrity="sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4="
      crossorigin="anonymous"
    ></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="js/main.js"></script>

      </section>
		</>
	);
}

export default Chat;