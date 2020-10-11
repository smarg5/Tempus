import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import therapistStyles from '../styles/therapists.module.scss'

function Therapists(props) {
  return (
    <>
      <Head>
        <title>About us</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

      </Head>
     
      <Navbar />

      <section>
        <h1 className={therapistStyles.Heading}> LINKS TO FIND NEARBY THERAPISTS </h1>
        
        <div className={therapistStyles.links}>
          <a href="https://www.psychologytoday.com/us">Psychology Today</a>
          <br></br>
          <br></br>
          <a href="https://www.therapytribe.com">Therapy Tribe</a>
          <br></br>
          <br></br>
          <a href="https://www.online-therapy.com">Online Therapy</a>
          <br></br>
          <br></br>
          <a href="https://healthsapiens.com">Health Sapiens</a>
          <br></br>
          <br></br>
          <a href="https://www.doctorondemand.com">Doctor on Demand</a>
          <br></br>
          <br></br>
          <a href="https://mdlnext.mdlive.com/home?utm_expid=.xvgWAya3TgCWwG8xCzuolA.1&utm_referrer=https%3A%2F%2Fwww.onlinetherapy.reviews%2F">MD Live</a>
          <br></br>
          <br></br>
          <a href="https://www.goodtherapy.org">Good Therapy</a>
          <br></br>
          <br></br>
          <a href="https://www.theravive.com/cities/united-states.aspx">Theravive</a>
          <br></br>
          <br></br>
          <a href="https://www.helpguide.org/articles/mental-health/finding-a-therapist-who-can-help-you-heal.htm">Help Guide</a>
          <br></br>
          <br></br>
          <a href="https://www.talkspace.com/therapists?utm_source=google&utm_medium=semnb&utm_campaign=Search_Google_NB_Directory_Desktop_BMM&utm_content=FEB2020-40P-V2-CAPS&utm_term=therapy%20in&gclid=Cj0KCQjwt4X8BRCPARIsABmcnOoxEBZtu7I4YsTLG7aPJRDO7KhDlQyc_hYcbg_o4zHi831YNRo2jeYaAuArEALw_wcB">Talk Space</a>
          <br></br>
          <br></br>
          <a href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=therapists_e&utm_content=72543956114&network=g&placement=&target=&matchtype=e&utm_campaign=1844876546&ad_type=text&adposition=&gclid=Cj0KCQjwt4X8BRCPARIsABmcnOoi-BVmOYeFctwgODLc1I1L8bAoryVAUUGBA882rxowzvMFX4MoTdQaAh0xEALw_wcB&not_found=1&gor=helpme">Better Help</a>
          <br></br>
          <br></br>
          <a href="https://www.regain.us/?transaction_id=1024e1e62b31556c5bfdeb6c9a2df8&utm_source=affiliate&utm_campaign=About%2C+Inc.+dba+Dotdash&utm_medium=Mac+OS+X&utm_content=&utm_term=%5Baffiliate_source%5D&not_found=1&gor=home">Regain</a>
          <br></br>
          <br></br>
          <a href="https://www.teencounseling.com/parent_start/?transaction_id=1029b0950e9c57f1057be680106925&utm_source=affiliate&utm_campaign=About%2C+Inc.+dba+Dotdash&utm_medium=Mac+OS+X&utm_content=&utm_term=%7BSource%7D&not_found=1">Teen Counseling</a>
          <br></br>
          <br></br>
          <a href="https://www.pridecounseling.com/start/?transaction_id=102320491871120544a1afe48bfecc&utm_source=affiliate&utm_campaign=1510&utm_medium=Mac+OS+X&utm_content=&utm_term=%7BSource%7D&not_found=1&gor=start_go&go=true">Pride Counseling</a>
          <br></br>
          <br></br>
          <a href="https://business.amwell.com">Amwell</a>
          <br></br>
          <br></br>
          <a href="https://www.7cups.com/member/">7 Cups of Tea</a>
        </div>
        
        <div className={therapistStyles.searchBox}> 
          <a id = "button" href="#" class="btn btn-success btn-block search-button">
            <p> &#128157;</p>
          </a>
        </div> 

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
   
      </section> 
      </>
  )
}
export default Therapists;
