import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import therapistStyles from '../styles/therapists.module.scss'
import React, {Component} from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Maryland from './therapists_state/md_therapists.jsx'


class Therapists extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            table: [
                ["Name", "Profession", "Contact Info"]
            ], 
            text: null
        };
        this.textName = this.textName.bind(this);
    }
    
    addRow = row => {
        console.log(this.state.text)
        if (this.state.text === 'md'){
            const table = this.state.table.slice(0, 1)
            var i = 0
            for (i = 0; i < 4; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        } else if (this.state.text === 'ak') {
            const table = this.state.table.slice(0, 1)
            var i = 0
            for (i = 4; i < 7; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        }
    }

    textName(event){
        const text = event.target.value
        console.log(text)
        this.setState({ text })
    }

    render(){
        const headers = this.state.table.slice(0, 1)[0]
        const rows = this.state.table.slice(1)

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
                        <input className={therapistStyles.placeholder} onChange={this.textName} placeholder="ENTER STATE'S ACRONYM" required ></input>
                    </div>

                    <div className={therapistStyles.searchBox}> 
                        <AddRowButton addRow = {this.addRow} />
                        
                        
                    </div> 
                </div>
            </section> 
            <section>
                <table className={therapistStyles.table}>
                    <TableHeaders headers = {headers} />
                    <tbody>
                        {
                            rows.map(row => <TableRow row={row}/>)
                        }
                    </tbody>
                </table>
                
            </section>
            </>
        );
    }
    
}

const TableHeaders = ({ headers }) =>
  <thead>
    <tr>
      { headers.map(header => <th>{ header }</th>) }
    </tr>
  </thead>

const TableRow = ({ row }) =>
  <tr>
    { row.map(cell => <td>{cell}</td>) }
  </tr>

const AddRowButton = ({ addRow}) =>
  <button onClick={() => { 
        addRow([['Robert Castle| M.S.| LCPC| NCC', 'Licensed Clinical Professional Counselor', 'Towson| Maryland 21204 | 410-702-5138'],
                ['Becky Roth| MSW| LMSW| CPC', 'Career Counselor| Career Coach| and Life Coach', '11904 F Darnestown Road| Gaithersburg| Maryland 20878 | 240-233-4188'],
                ['Mary Beasley| M.Min| LCCC', 'Licensed Clinical Christian Counselor', '704 Chichester Lane| Silver Spring| Maryland 20904 | 301-785-0531'],
                ['Gabriel Newman| Ph.D.', 'Licensed Clinical Psychologist', '2328 W Joppa Road| Suite 10| Lutherville| Maryland 21093 | 410-828-7792'],
                ['John Rhead| Ph.D.| CGP', 'Licensed Psychologist', '5560 Sterrett Pl. #205| Columbia| Maryland 21044 | (410) 997-5060'],
                ['Elaine Klionsky| J.D.| Ph.D.| CGP', 'Psychologist', '6917 Arlington Road| Bethesda| Maryland 20814 | 301-641-8406'],
                ['Bertha White| MSW| LCSW-C', 'Licensed Certified Social Worker - Clinical', 'Lakeview Professional Park| 605 Post Office Road| Suite 301| Waldorf| Maryland 20602 | 240-346-0934']
                ])
        }}>
    SEARCH
  </button>

export default Therapists;
