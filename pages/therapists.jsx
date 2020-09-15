import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import therapistStyles from '../styles/therapists.module.scss'


function Therapists(props) {
  return (
    <>
      <Head>
        <title>About us</title>

      </Head>
     
      <Navbar />

      <section>
        <div className={therapistStyles.findTherapistBox}>
          <p> FIND A THERAPIST</p>
        </div>
        <div className={therapistStyles.stateBox}> 

          
          <input id = "placeholder" className={therapistStyles.placeholder} placeholder="ENTER STATE'S ACRONYM" required="" ></input>
        </div>
        <div className={therapistStyles.searchBox}> 



		
         {/*  <a id = " button" class="btn btn-success btn-block search-button">
            <p> &#128269;</p>
          </a>*/}
        </div>  

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
   
      </section> 
      </>
  )
}
export default Therapists;


