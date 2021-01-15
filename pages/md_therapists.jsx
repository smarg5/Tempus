import Head from 'next/head'
import Navbar from '../../components/Navbar';
import utilStyles from '../../styles/utils.module.scss'
import therapistStyles from '../../styles/therapists.module.scss'
import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from 'react-feather';

class Therapists extends Component{
    render(){
        return (
        <>
        <Head>
            <title>Therapists</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </Head>
        
        <Navbar />

        <section className="hero">

            <div className="text-wrapper w-full">
                <div className={therapistStyles.findTherapistBox}>
                    <p> FIND A THERAPIST </p>
                </div>

                <div className={therapistStyles.stateBox}>
                    <input className={therapistStyles.placeholder} placeholder="ENTER STATE'S ACRONYM" required ></input>
                </div>

                <div className={therapistStyles.searchBox}> 
                    <Search />
                {/* <a id = "button" href="#" class="btn btn-success btn-block search-button">
                    <p> &#128269;</p> */}
                {/* </a> */}
                </div> 
            </div>
        </section> 

        <section>
            <table className={therapistStyles.table}>
                <thead>
                    <tr className={therapistStyles.th}>
                    <th>Name</th>
                    <th>Profession</th>
                    <th>Contact_Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Robert Castle| M.S.| LCPC| NCC</td>
                        <td className={therapistStyles.td}>Licensed Clinical Professional Counselor</td>
                        <td className={therapistStyles.td}>Towson| Maryland 21204 | 410-702-5138</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>Becky Roth| MSW| LMSW| CPC</td>
                        <td className={therapistStyles.td}>Career Counselor| Career Coach| and Life Coach</td>
                        <td className={therapistStyles.td}>11904 F Darnestown Road| Gaithersburg| Maryland 20878 | 240-233-4188</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Mary Beasley| M.Min| LCCC</td>
                        <td className={therapistStyles.td}>Licensed Clinical Christian Counselor</td>
                        <td className={therapistStyles.td}>704 Chichester Lane| Silver Spring| Maryland 20904 | 301-785-0531</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>Gabriel Newman| Ph.D.</td>
                        <td className={therapistStyles.td}>Licensed Clinical Psychologist</td>
                        <td className={therapistStyles.td}>2328 W Joppa Road| Suite 10| Lutherville| Maryland 21093 | 410-828-7792</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>John Rhead| Ph.D.| CGP</td>
                        <td className={therapistStyles.td}>Licensed Psychologist</td>
                        <td className={therapistStyles.td}>5560 Sterrett Pl. #205| Columbia| Maryland 21044 | (410) 997-5060</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>Elaine Klionsky| J.D.| Ph.D.| CGP</td>
                        <td className={therapistStyles.td}>Psychologist</td>
                        <td className={therapistStyles.td}>6917 Arlington Road| Bethesda| Maryland 20814 | 301-641-8406</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Bertha White| MSW| LCSW-C</td>
                        <td className={therapistStyles.td}>Licensed Certified Social Worker - Clinical</td>
                        <td className={therapistStyles.td}>Lakeview Professional Park| 605 Post Office Road| Suite 301| Waldorf| Maryland 20602 | 240-346-0934</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>John Gartner| Ph.D.</td>
                        <td className={therapistStyles.td}>psychologist</td>
                        <td className={therapistStyles.td}>6525 N. Charles St| suite 135| Towson| Maryland 21204 | 410-337-8207</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Jennifer Beall| MS| NCC| LCPC| LCADC</td>
                        <td className={therapistStyles.td}>Licensed Clinical Professional Counselor</td>
                        <td className={therapistStyles.td}>1457 Jordan Ave| Crofton| Maryland 21114 | 240-401-8086</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>Ann Klein| LCSW-C| MSW</td>
                        <td className={therapistStyles.td}>Licensed Clinical Social Worker| Marriage &amp; Family Therapist</td>
                        <td className={therapistStyles.td}>6239 Plaited Reed| Columbia| Maryland 21044 | 240-593-1517</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Erick Sowell| LMSW</td>
                        <td className={therapistStyles.td}>Licensed Master Social Worker</td>
                        <td className={therapistStyles.td}>9199 Reisterstown Road| Suite 202 B| Owings Mills| Maryland 21117 | 443-712-7128</td>
                    </tr>
                    <tr className={therapistStyles.nth}>
                        <td className={therapistStyles.td}>Mark Napack| MA| MS| LCPC</td>
                        <td className={therapistStyles.td}>Licensed Clinical Professional Counselor (LCPC)</td>
                        <td className={therapistStyles.td}>6810 Montrose Road| North Bethesda| Maryland 20852 | 301-919-5420</td>
                    </tr>
                    <tr className={therapistStyles.hover}>
                        <td className={therapistStyles.td}>Cynthia Rebholz| M.S.| LCMFT</td>
                        <td className={therapistStyles.td}>Marriage and Family Therapist</td>
                        <td className={therapistStyles.td}>316 Main Street| Suite 200| Gaithersburg| Maryland 20878 | 240-230-7182</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </>
    )
    }
};
export default Therapists;