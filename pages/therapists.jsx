import Head from 'next/head'
import Navbar from './components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import therapistStyles from '../styles/therapists.module.scss'
import React, {Component} from 'react';
import { useMediaPredicate } from 'react-media-hook';
import MdSearch from 'react-ionicons/lib/MdSearch'
import { Tooltip } from 'reactstrap';

 
class Therapists extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            table: [[]], 
            text: null
        };
        this.textName = this.textName.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    addRow = row => {
        console.log(this.state.text)
        if (this.state.text === 'al' || this.state.text === 'AL' || this.state.text === 'Al'){
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 0; i < 10; i++) {
                /*  if (i % 2 == 0) {
                    <tr className={therapistStyles.hover}>row[i]</tr>
                } else {
                    (<tr className={therapistStyles.nth}>row[i]</tr>)
                }  */
                table.push(row[i])
            } 
            
            this.setState({ table })

        } else if (this.state.text === 'ak' || this.state.text === 'Ak' || this.state.text === 'AK' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 10; i < 20; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'az' || this.state.text === 'Az' || this.state.text === 'AZ' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 20; i < 30; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'ar' || this.state.text === 'Ar' || this.state.text === 'AR' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 30; i < 40; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text.toLowerCase() === 'ca' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 40; i < 50; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'co' || this.state.text === 'Co' || this.state.text === 'CO' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 50; i < 60; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'ct' || this.state.text === 'Ct' || this.state.text === 'CT' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 60; i < 70; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'de' || this.state.text === 'De' || this.state.text === 'DE' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 70; i < 80; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'dc' || this.state.text === 'Dc' || this.state.text === 'DC'
            || this.state.text === 'md' || this.state.text === 'MD'|| this.state.text === 'Md') {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 80; i < 90; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else if (this.state.text === 'fl' || this.state.text === 'Fl' || this.state.text === 'FL' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 90; i < 100; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        

        } else if (this.state.text === 'ga' || this.state.text === 'Ga' || this.state.text === 'GA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 100; i < 110; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'hi' || this.state.text === 'Hi' || this.state.text === 'HI' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 110; i < 120; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'id' || this.state.text === 'Id' || this.state.text === 'ID' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 120; i < 130; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'il' || this.state.text === 'Il' || this.state.text === 'IL' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 130; i < 140; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'in' || this.state.text === 'In' || this.state.text === 'IN' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 140; i < 150; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ia' || this.state.text === 'Ia' || this.state.text === 'IA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 150; i < 160; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ks' || this.state.text === 'Ks' || this.state.text === 'KS' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 160; i < 170; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ky' || this.state.text === 'Ky' || this.state.text === 'KY' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 170; i < 180; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'la' || this.state.text === 'La' || this.state.text === 'LA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 180; i < 190; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'me' || this.state.text === 'Me' || this.state.text === 'ME' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 190; i < 200; i++) {
                table.push(row[i])
            }
            this.setState({ table })
       
        } else if (this.state.text === 'ma' || this.state.text === 'Ma' || this.state.text === 'MA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 200; i < 210; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'mi' || this.state.text === 'Mi' || this.state.text === 'MI' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 210; i < 220; i++) {
                table.push(row[i])
            }
            this.setState({ table })
       
        } else if (this.state.text === 'mn' || this.state.text === 'Mn' || this.state.text === 'MN' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 220; i < 230; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ms' || this.state.text === 'Ms' || this.state.text === 'MS' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 230; i < 240; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'mo' || this.state.text === 'Mo' || this.state.text === 'MO' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 240; i < 250; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'mt' || this.state.text === 'Mt' || this.state.text === 'MT' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 250; i < 260; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ne' || this.state.text === 'Ne' || this.state.text === 'NE' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 260; i < 270; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'nv' || this.state.text === 'Nv' || this.state.text === 'NV' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 270; i < 280; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'nh' || this.state.text === 'Nh' || this.state.text === 'NH' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 280; i < 290; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'nj' || this.state.text === 'Nj' || this.state.text === 'NJ' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 290; i < 300; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'nm' || this.state.text === 'Nm' || this.state.text === 'NM' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 300; i < 310; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ny' || this.state.text === 'Ny' || this.state.text === 'NY' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 310; i < 320; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'nc' || this.state.text === 'Nc' || this.state.text === 'NC' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 320; i < 330; i++) {
                table.push(row[i])
            }
            this.setState({ table })
       
        } else if (this.state.text === 'nd' || this.state.text === 'Nd' || this.state.text === 'ND' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 330; i < 340; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'oh' || this.state.text === 'Oh' || this.state.text === 'OH' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 340; i < 350; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ok' || this.state.text === 'Ok' || this.state.text === 'OK' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 350; i < 360; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'or' || this.state.text === 'Or' || this.state.text === 'OR' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 360; i < 370; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'pa' || this.state.text === 'Pa' || this.state.text === 'PA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 370; i < 380; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'ri' || this.state.text === 'Ri' || this.state.text === 'RI' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 380; i < 390; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'sc' || this.state.text === 'Sc' || this.state.text === 'SC' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 390; i < 400; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'sd' || this.state.text === 'Sd' || this.state.text === 'SD' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 400; i < 410; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'tn' || this.state.text === 'Tn' || this.state.text === 'TN' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 410; i < 420; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'tx' || this.state.text === 'Tx' || this.state.text === 'TX' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 420; i < 430; i++) {
                table.push(row[i])
            }
            this.setState({ table })
       
        } else if (this.state.text === 'ut' || this.state.text === 'Ut' || this.state.text === 'UT' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 430; i < 440; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'vt' || this.state.text === 'Vt' || this.state.text === 'VT' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 440; i < 450; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'va' || this.state.text === 'Va' || this.state.text === 'VA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 450; i < 460; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'wa' || this.state.text === 'Wa' || this.state.text === 'WA' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 460; i < 470; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'wv' || this.state.text === 'Wv' || this.state.text === 'WV' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 470; i < 480; i++) {
                table.push(row[i])
            }
            this.setState({ table })
       
        } else if (this.state.text === 'wi' || this.state.text === 'Wi' || this.state.text === 'WI' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 480; i < 490; i++) {
                table.push(row[i])
            }
            this.setState({ table })
        
        } else if (this.state.text === 'wy' || this.state.text === 'Wy' || this.state.text === 'WY' ) {
            const table = this.state.table.slice(0, 0)
            table.push(["Name", "Address", "Phone Number"])
            var i = 0
            for (i = 490; i < 500; i++) {
                table.push(row[i])
            }
            this.setState({ table })

        } else {
            const table = this.state.table.slice(0, 0)
            table.push([])
            this.setState({ table })
            alert('Please make sure you have entered the correct acronym of the US state(s)!')
            
        }
    }

    textName(event){
        const text = event.target.value
        console.log(text)
        this.setState({ text })
    }

    submitForm(event) {
        event.preventDefault();
        if (!this.state.text) {
            alert('Please enter your state acronym \(e.g. \'NY\'\)')
            return;
        }
    this.addRow([['John R. Goff, PhD', 'Riverside Office Park Center, Ste. A-3 535 Jack Warner Pkwy. Tuscaloosa, AL 35404', '(205) 553-2851'],
                ['Lenora J. Enix, PsyD', '2699 Corporate Drive Suite 200 Birmingham, AL 35242','(205) 314-4760'],
                ['Melissa V. Clinger, PsyD', '2999 Riverchase Galleria Suite 500 Birmingham, AL 35244', '(205) 994-8811'],
                ['Mollie K. Thomas, PhD', '1902 Oxmoor Road Birmingham, AL 35244', '205-908-8447'],
                ['Sara L Stromeyer, PhD', '399 Vestavia Pkwy Suite 101 Vestavia Hills, AL 35216', '205-822-7348' ],
                ['William Jeffrey Bryson, PhD' , 'Crestwood Professional Center 249 Chateau Drive, Suite 145 Huntsville, AL 35801', '256-801-8937'],
                ['Nancy L. Sack, PhD' , '1735 Taliaferro Montgomery, AL 3611', '(334) 590-8492'],
                ['Nancy W. Berland, PhD', '2199 Lakeshore Drive Suite 150 Birmingham, AL 35209', '(205) 871-6926'],
                ['Crystal Knight Kelley, PhD', 'Clinical Psychologists, PC 247 E Glenn Ave Auburn, AL 36830', ' (334) 821-3350'],
                ['James Michael George, PsyD', 'Covenant Pain Center / Alabama Recovery Center 3006 Memorial Pkwy SW Unit 2 Huntsville, AL 35801' , '(256) 882-2003' ],
                
                ['Jennifer Beathe, PsyD', 'Anchorage, AK 99508', '907-272-0855'],
                ['Herbert A. Schwager, PhD', 'P.O. Box 521 Willow, AK 99688', '907-715-7391'],
                ['Mark Zelig, PhD', '6924 Union Park Center Suite 550 Cottonwood Heights, AK 84047-6527', '801-273-3365'],
                ['Michael P. Aanavi, PhD', '609 W. 2nd Ave. Ste. 100 Anchorage, AK 99501', ' 907-297-8590'],
                ['Amy Renee Mozolik, PsyD', 'PO Box 230811 Anchorage, AK 99523', '907-306-6760'],
                ['Kara Stocker, PsyD', 'Anchorage, AK 99507', '907-268-1572'],
                ['Kristi Hulse Fuller, PhD', 'Fuller Diagnostics 2599 Denali Street Suite 450 Anchorage, AK 99503', '907-561-0552'],
                ['Rick A. Graber, PhD', '18537 Snowy Plover Cir Anchorage, AK 99516', '(907) 644-8044'],
                ['Virginia Parret, PhD', '1200 East 36th Ave. Anchorage, AK 99508', '907-212-9335'],
                ['Diane V. DiGiulio, PhD', 'Juneau, AK 99800-8779', '(907) 523-1973'],

                ['Christine Wells, PhD', 'Tucson, AZ 85717', '520-904-7940'],
                ['Jennifer Averyt, PhD', '1129 E. Missouri Ave Phoenix, AZ 85014', '602-461-7493'],
                ['Dane A Higgins, PhD', 'Comprehensive Neuropsychological Services 2439 N Litchfield Rd Ste. 200 Goodyear, AZ 85395', '(623) 977-6860'],
                ['Mark John Hovee, PsyD', '9779 N. Havenwood Way Marana, AZ 85653', '520-999-5948'],
                ['Jennifer Baumgardner, PhD', '599 N. Bullard Ave. Suite 10 Goodyear, AZ 85338', '(623) 262-8915'],
                ['John J. Unmacht, PhD', '4299 N. Miller Rid Suite 110 Scottsdale, AZ 85251', '(480) 949-9133'],
                ['Carol Anne McLean, PhD', '8686 E. Via de Ventura #214 Scottsdale, AZ 85258', '480-659-5563'],
                ['Melanie Rich, PhD', '8114 E Indian Bend Road Suite 119 Scottsdale, AZ 85250', '480-467-0288'],
                ['David G. Jarmon, PhD', '9589 East Ironwood Square Dr. Suite 201 Scottsdale, AZ 85258', '480-370-8902'],
                ['Julie Cajolet-Eckhardt, PsyD', 'Phoenix, AZ 85027', '323-475-8543'],
                
                ['Nicholas Long, PhD', 'Univ. of Arkansas for Med Sciences, Pediatrics, 0 Childrens Way, Slot 512-21 Little Rock, AR 72202', '(501) 364-1021'],
                ['David M. Blaske, PhD', 'Lowell, AR 72744', '(870) 253-2155'],
                ['Frances Kristine Ketz, PhD', 'Batesville, AR 72500', '870-262-7755'],
                ['Lisa Fitzgibbons, PhD', '514 Enterprise Drive Suite 300, Lowell, AR 72745', '(479) 717-7626'],
                ['Ronald Pelz, PsyD', 'Conway, AR 72031', '641-691-2931'],
                ['Becky L. Porter, PhD', '2023 Arkansas Valley Dr., #604 Little Rock, AR 72212', '(501) 227-8555'],
                ['Damon Lipinski, PhD', 'Ctrs/Children/Schmieding Dev Cntr, 518 Latham Drive, Lowell, AR 72745', ' (479) 750-0125 ext. 211'],
                ['Patricia L. Griffen, PhD', 'Clinical Psychol Svcs, Inc., 17 Corporate Hill, Ste 205, Little Rock, AR 72205', '(501) 223-8883'],
                ['Nina Jefferson, PsyD', 'Monticello, AR 71654', '870-367-6246'],
                ['Patricia Jean Walz, PhD', 'Fort Smith, AR 72902', '(479) 785-1995'],

                ['Irwin Hoffman, PhD', '1239 Westlake Blvd., Ste 211, Westlake Village, CA 91361', '(805) 494-4957'],
                ['Pamela Tobi Fishel, PhD', '3566 Schaefer Street, Culver City, CA 90232', '615-218-6020'],
                ['Stephen George Thein Jr., PhD', '3002 Fourth Ave, San Diego, CA 92103', '(619) 294-4302'],
                ['Carol Lark, PhD', '98 Via Robles, Monterey, CA 93940', '(831) 372-9119'],
                ['Karen Bronk Froming, PhD', '174 VILLA TERRACE, San Francisco, CA 94114', '(415) 621-8698'],
                ['Tsoline Konialian Matossian, PsyD', '481 N Rosemead Blvd, Suite 207, Pasadena, CA 91107', '626-586-1220'],
                ['Alexandria Leedy, PsyD', '2249 Union St., Ste. 306, San Francisco, CA 94123', '415-356-9897'],
                ['Uri Kugel, PhD', 'San Diego, CA 92116', '510-213-8740'],
                ['Matthew Maibaum, PhD', '9853 National Boulevard, Suite 336, Los Angeles, CA 9003', '(310) 699-1583'],
                ['Sharon Churnin Nash, PhD', '349 Second Street, Suite 1, Los Altos, CA 94022', '650-949-1615'],

                ['Julie W. Lee-Richter, PhD', '699 Elmhurst Drive, Unit F, Highlands Ranch, CO 80129', '(303) 470-7708'],
                ['Ernest T. Soper III, PhD', 'Psychological Services, P.C., 612 Walnut Street, Boulder, CO 80302', '(303) 443-1223'],
                ['Anna Loney, PsyD', 'Denver, CO 80237', '303-602-3909'],
                ['Nicole B. Sperekas, PhD', '1300 S Monaco Pkwy, Denver, CO 80224', '(303) 759-2120'],
                ['Rebecca A. Baldwin, PhD', '18 East Willamette, Colorado Springs, CO 80903', '(719) 635-8894'],
                ['Richard F. Spiegle, PsyD', 'Cntr Forensic & Clinical Psychology, 599 S. Cherry St, Ste 315, Denver, CO 80246-1705', '(303) 837-0776'],
                ['Heidi Lyn Ardern, PhD', '2800 Youngfield Street, Suite 300, Golden, CO 80401', '303-205-8482'],
                ['Emily Rademan, PsyD', '1234 Lake Plaza Dr, Ste 134, Colorado Springs, CO 80906', '719-357-6462' ],
                ['Denise Lee Lucia, PhD', 'Castle Rock, CO 80107', '303-945-3775'],
                ['Kay Beaulieu, PsyD', 'Colorado Springs, CO 80905', '720-556-0338'],

                ['Alfred D. Kornfeld, PhD', '87 Lamplighter Dr, Manchester, CT 06040', '(860) 895-7041'],
                ['David N. Greenfield, PhD', 'The Center for Internet & Technology Addiction, 7 Lowell Rd, West Hartford, CT 06119', '(860) 561-8727'],
                ['Shelley Pelletier, PhD', '953 Middlesex Turnpike, Ste. A2, Old Saybrook, CT 06475', '(860) 388-2000'],
                ['Catherine Wargo, PsyD', 'Northeast Neuropsychology, LLC, West Hartford, CT 06106', '203-272-6007'],
                ['Emily B. Littman, PhD', '1210 W Main St, Waterbury, CT 06708', '(203) 575-9526'],
                ['Nicole M Barcelos, PsyD', 'Easterseals, 99 Deerfield Road, Windsor, CT 06095', '860-270-0600'],
                ['Walter J. Pawlowski, PhD', '112 Maple Avenue, Windsor, CT 06095-2930', '(860) 916-1134'],
                ['John H. Ehrenreich, PhD', '18 Holiday Point Rd, Sherman, CT 06784', '(860) 355-2539'],
                ['Warren Leib, PhD', '90 Hillcrest Ave, Wethersfield, CT 06109', '(860) 563-5330'],
                ['Linda M. Jordan-Parker, EdD', 'Somers, CT 06070', '860-819-1088'],

                ['Walter Joseph Ciecko Jr., PhD', '1300 N Harrison St, Ste 101, Wilmington, DE 19806', '(302) 429-0195'],
                ['Elizabeth Chen, PhD', '3607 Lancaster Pike, Wilmington, DE 19805', '302-995-9600'],
                ['Barbara Belford, PhD', '313 E. Main St, Ste 104, Newark, DE 19711', '(302) 738-9466'],
                ['Patricia P. Miripol, PhD', 'Linden Hill Station, 4419 Limestone Rd., Ste 201, Wilmington, DE 19808', '(302) 633-6416'],
                ['Jay A. Jemail, PhD', '5828 Kennet Pike, Centreville, DE 19807', '302-218-5008'],
                ['Katelyn Vertucci, PhD', 'Nemours/A. I. duPont Hospital for Children, 1800 Rockland Road, Wilmington, DE 19803', '302-651-4500'],
                ['Eileen F. Locklear, PhD', 'Millsboro, DE 19965', '302-399-6086'],
                ['Stacey Marie Boyer, PsyD', 'Christiana Care Health System, 4754 Ogletown-Stanton Road, Newark, DE 19718', '302-733-6620'],
                ['Amelia Dawn Serine, PsyD', '500 Silverside Road, Suite 145, Wilmington, DE 19809', '302-798-7464'],
                ['Samuel Romirowsky, PhD', 'F-53 Omega Dr, Newark, DE 19713', '302-737-7090'],

                ['Michelle Chabbott, EdD', 'Washington, DC 20010', '202-425-7262'],
                ['Charles E. Parks, PhD', '5004 River Hill Rd, Bethesda, MD 20816', '(301) 320-3266'],
                ['Michael L. Hendricks, PhD', 'Washington Psychological Center, P.C., 5224 Wisconsin Ave., NW, Suite 513, Washington, DC 20015', '(202) 364-1575'],
                ['Lillian Comas-Diaz, PhD', '907 New Hampshire Avenue NW, Suite 700, Washington, DC 20037', '(202) 775-1938'],
                ['Peter D. Russem, PhD', '1399 20th St, NW, #107, Washington, DC 20036', '301 461 0353'],
                ['Leila Bremer, PsyD', '1329 New Hampshire Ave, NW, Suite 106, Washington, DC 20036', '202-887-0404'],
                ['Judith L. Goodstein, PhD', '3530 Albemarle St, NW, Washington, DC 20008', '(202) 363-2421'],
                ['Lisa Wagner Hill, PsyD', '2 Washington Circle, NW, Suite 403, Washington, DC 20037', '202-550-2762'],
                ['Douglas W. LaBier, PhD', '5224 Connecticut Ave., NW, Ste 214, Washington, DC 20015', '202-363-1147'],
                ['James R. Striker, PhD', '1399 20th Street, NW, Suite 103, Washington, DC 20036', '301-524-5305'],

                ['Mitchell R. Gordon, PhD', '3749 San Jose Place, Suite 35, Jacksonville, FL 32257', '786-506-9934'],
                ['Sheba Katz, PhD', '12640 World Plaza Lane, #56 Fort Myers, FL 33907', '239-247-1756'],
                ['Carolyn Denise (Adams) Murphy, PhD', 'Palmetto, FL 34220', '571-310-1399'],
                ['Holly A. Bedotto, PsyD', '4769 Biscayne Blvd., Suite 780, Miami, FL 33137', '(305) 571-8411'],
                ['Alexis Resnick, PhD','299 S. Pine Island Road, Suite 226, Plantation, FL 33324', '305-771-1522' ],
                ['Stuart J. Greif, PsyD', '4300 E Knights Griffin Rd, Plant City, FL 33565', '(813) 754-1105'],
                ['Terrie Andrews, PhD', '840 Prudential Dr., Ste 1350, Jacksonville, FL 32207', '904-376-3800'],
                ['Cassaundra Wimes, PhD', '20534 NW 2nd Avenue, Suite 205, Miami, FL 33169', '305-918-2588'],
                ['Nicholas Ruben Scheidt, PsyD', '406 Lincoln Road, Suite 10-F, Miami Beach, FL 33139', '786-250-2221'],
                ['Alan F. Jacobson, PhD', 'Miami, FL 33155-2660', '(305) 894-6469'],

                ['Betsy A. Gard, PhD' , '6999 Peachtree-Dunwoody Bldg 16 Atlanta, GA 30328' , '770-393-1885 ext. 108'],
                ['Lisa Fabian Salzberg, PhD' , '6 Piedmont Ctr, Ste 407 Atlanta, GA 30305' , '(404) 237-3987'],
                ['Cindy Schoell, PsyD' , 'PO Box 29725 Atlanta, GA 30359' , '678-283-5961'],
                ['Amy L. Flowers, PhD' , 'PO Box 6676 Macon, GA 31208' , '478-262-8630'],
                ['William Allen Baughman, PhD' , 'Marietta, GA 30063' , '770-222-1980'],
                ['Anne-Marie Meehan, PhD' , '24-B Lenox Pointe NE Atlanta, GA 30324' , '(404) 276 9036'],
                ['Hugh A. Christie, PhD' , '219-C W College St Griffin, GA 30224' , '(770) 228-9317'],
                ['Timothy Curran, PsyD' , '594 Towne Park West Suite 200 Rincon, GA 31326' , '(912) 785-2100'],
                ['Patricia Logan, PhD' , '109 Samaritan Dr. Suite 212 Cumming, GA 30040' , '770-744-1664'],
                ['Tabitha Robin Casey, PsyD' , '19 Whitlock Place Suite 202 Marietta, GA 30064' , '404-494-0201'],               

                ['Nalani Grace, PsyD' , 'Honolulu, HI 96781' , '808-478-1842'],
                ['Amanda S. Armstrong, PhD' , '1599 Kapiolani Blvd, Ste 1650 Honolulu, HI 96814' , '(808) 951-5540'],
                ['Kristi Mueller, PsyD' , 'Honolulu, HI 96824' , '808-859-2017'],
                ['Roger S. Hamada, PhD' , '97-211 Pali Momi Street Ste 810 Aiea, HI 96701' , '808-488-7001'],
                ['Sheri Sloggett-Shanks, PsyD' , '4210 Waialae Ave #206A Honolulu, HI 96816' , '808-735-2494'],
                ['Samuel Shaw Dutton, PhD' , '959 Prospect St. #6 Honolulu, HI 96822' , '281-235-3624'],
                ['Michelle Lee Zalenski, PsyD' , 'PO Box 4490 Hilo, HI 96720' , '808-854-4824'],
                ['Robert Ressler, PhD' , 'HCR 0 Box 5386 Keaau, HI 96749' , '808-937-8926'],
                ['Steven J. Choy, PhD' , '49 S Beretania St, Ste C-201 Honolulu, HI 96813' , '808-223-8483'],
                ['Victoria Liou-Johnson, PhD' , 'Honolulu, HI 96824' , '808-221-6540'],

                ['William M. Green, PhD' , 'P.O. Box 1208 Coeur dAlene, ID 83816-1209' , '(208) 765-1894'],
                ['Gerald H. Gardner, PhD' , '210 East Coeur d Alene Avenue Suite 101 Coeur dAlene, ID 83814' , '208-765-3171'],
                ['Michael J. Eisenbeiss Sr., PhD' , 'Boise Psychol Svcs 314 Allumbaugh Street Boise, ID 83704-9208' , '(208) 376-3546'],
                ['Susan B. Eirich-Dehne, PhD' , 'P.O. Box 367 Driggs, ID 83422' , '(208) 456-0926'],
                ['Daniel McGrath, PsyD' , '2704 East 17th Street Ammon, ID 83406' , '208-346-7500'],
                ['Timothy S. Rehnberg, PhD' , '1102 West Ironwood Drive Coeur DAlene, ID 83814' , '208-651-6569'],
                ['Amy J. Amarello, PsyD' , '4789 Savannah Lane Boise, ID 83714' , '208-381-7499'],
                ['Donald M. Whitley II, PhD' , '1150 Hospital Way Building D Pocatello, ID 83201' , '(208) 233-4900'],
                ['Robert Engle, PhD' , '379 E Park Center Blvd Suite 210 Boise, ID 83706' , '208-384-0884'],
                ['Heidi Tennyson, PsyD' , 'Boise, ID 83705' , '208-373-0790'],

                ['Jessica Luitjohan, PsyD' , '312 Cambridge Drive Glen Carbon, IL 62034' , '712-255-8323'],
                ['Marc Drummond, PsyD' , '519 E Kendall Dr Unit A Yorkville, IL 60560' , '630-385-2784'],
                ['Daniel E. Rady, PsyD' , 'P.O. Box 1256 New Lenox, IL 60451' , '(815) 485-9790'],
                ['Mary Plonis, PsyD' , '3307 Grassmere Road Naperville, IL 60564' , '630-269-0716'],
                ['Sheldon Cotler, PhD' , '1534 Lake Cook Rd, Ste 111 Northbrook, IL 60062' , '(847) 498-4744'],
                ['Wendy Goetz, PsyD' , '154 N. Michigan Ave. Suite 327 Chicago, IL 60601' , '773-364-6078'],
                ['Edward H. Marston, PhD' , 'Great Changes Counseling Services 9434 Bormet Drive, #5 Mokena, IL 60448' , '(708) 995-7226'],
                ['Sonila Sejdaras, PsyD' , '4249 N. Marine Drive Suite 230 Chicago, IL 60613' , '872-529-1980'],
                ['Bradley C. Kahle, PsyD' , 'Meier Clinic 2099 Manchester Rd, Ste 1510 Wheaton, IL 60187' , '(630) 653-1717'],
                ['Christina Blodgett Dycus, PhD' , '2299 Barrington Road Suite 400 Hoffman Estates, IL 60169' , '847-469-7537'],

                ['Roseann Woodka, PhD' , '925 E Jackson Blvd Elkhart, IN 46516' , '574-522-6292'],
                ['Linda L. Daniel, PhD' , 'IU Health Ball Addiction Treatment and Recovery Center 209 N. Tillotson Muncie, IN 47304' , '765-747-3467'],
                ['Dixie J. Pederson, PhD' , '1 North 19th St Lafayette, IN 47904' , '(765) 491-0002'],
                ['Kimberly Marie Martin, PsyD' , '3649 E. 46th St. Office 1 Indianapolis, IN 46205' , '317-721-9067'],
                ['Daniel J. Hauschild, PsyD' , 'Papermill Office Park, #43 1910 St. Joe Center Rd Fort Wayne, IN 46825' , '(260) 471-8033'],
                ['Erica D Kane, PsyD' , 'New Castle, IN 47361' , '765-388-2671'],
                ['Fiona J. Kress, PhD' , 'Kress Psychological Services, LLC 754 West Carmel Dr, Ste 201 Carmel, IN 46032' , '(317) 912-1500'],
                ['William G. Kronenberger, PhD' , 'Riley Child Psychiat Clinic 704 Riley Hospital Dr, Rm 4300 Indianapolis, IN 46202-5200' , '(317) 944-8162'],
                ['Mary L. Sanders, PhD' , 'Comm Psychol Consultants 11349 N. Meridian Street, Suite 300 Carmel, IN 46032' , '(317) 574-1785'],
                ['Dennis M. Greene, PhD' , 'Meridian Psychol Assoc 4400 N Central Ave Indianapolis, IN 46205' , '(317) 923-2333'],

                ['Marla Beth Shapiro, PhD' , 'Urbandale, IA 50321' , '515-276-3406'],
                ['Tammy Lynn Wilgenbusch, PhD' , 'U of IA Childrens Hospital; Div of Ped Psychology 99 Hawkins Dr., 148 CDD Iowa City, IA 52242' , '319-384-6912'],
                ['Elizabeth A. Lonning, PsyD' , '2101 E. 38th Street Davenport, IA 52807' , '(563) 359-4049'],
                ['John W. Keraus, PhD' , '1037 Meadowview Lane Davenport, IA 52806-2811' , '563-340-0051'],
                ['Herbert L. Notch, PhD' , '7509 SW 9th Des Moines, IA 50315' , '(515) 287-1491'],
                ['Sunde Michele Nesbit, PhD' , '222 S. Walnut Ave. Ames, IA 50010-4001' , '515-233-1122'],
                ['Erin N. Stevens, PhD' , 'West Des Moines, IA 50265' , '515-216-0626'],
                ['Don C. Damsteegt, PhD' , 'Family Psychology Assoc P.C. 1220 Center Point Rd NE Cedar Rapids, IA 52402' , '(319) 378-1199'],
                ['Stephen Joseph Frommelt, PhD' , 'Medical Assoc. Clinic; Dept Psychiatry 999 Langworthy Drive Dubuque, IA 52001' , '(563) 584-3500'],
                ['Amy Rein, PhD' , '520 E Market St. Iowa City, IA 52245' , '772-284-6216'],

                ['Georgette Yetter, PhD' , 'Manhattan, KS 66502' , '785-776-5858 ext 5'],
                ['Harriet H. Barrish, PhD' , '10208 Hemlock Drive Overland Park, KS 66212' , '(913) 491-4343'],
                ['Bruce M. Cappo, PhD' , 'Ste 99 8629 Bluejacket Street Lenexa, KS 66214-1607' , '(913) 677-3553'],
                ['David O. Hill, PhD' , '7636 Canterbury Prairie Village, KS 66208-3942' , '(913) 341-5115'],
                ['Emily Warnes, PhD' , '9299 Meadowview Dr Lenexa, KS 66227' , '913-378-1061'],
                ['Stephen K. Sowards, PhD' , '328  S. Morningside St Wichita, KS 67218' , '(316) 260-4848'],
                ['Jason Malousek, PsyD' , 'Leavenworth, KS 66047' , '913-758-9401'],
                ['Bruce S. Liese, PhD' , 'KUMC - Family Medicine 3900 Rainbow Blvd., Mailstop 4010 Kansas City, KS 66160' , '(913) 588-1912'],
                ['Stephen H. Blum, PhD' , '834 SW Western Ave. Topeka, KS 66606' , '785-233-9400'],
                ['Lynn Lieberman, PhD' , 'Westwood Hills, KS 66204' , '816-223-1658'],

                ['Paul G. Salmon, PhD' , 'Department of Psychological and Brain Sciences University of Louisville Louisville, KY 40291' , '(502) 852-8268'],
                ['Jason Matthew Keller, PsyD' , '799 Stone Creek Pkwy Ste. 7 Louisville, KY 40223-5366' , '502-423-0332'],
                ['William R. Rigby, PhD' , '214 Croghan Drive Elizabethtown, KY 42701' , '270-769-0773'],
                ['Shelby McGuire, PsyD' , '911 Maryland Ct. Flatwoods, KY 41139' , '606-465-6581'],
                ['James P. Bloch, PhD' , 'East Louisville Psychology Group, PLLC 1229 S. Hurstbourne Pkwy., Suite 245 Louisville, KY 40222' , '502-423-4474'],
                ['Brittany Bonner-Dillon, PsyD' , '1656 Liberty Rd Lexington, KY 40505' , '330-340-7522'],
                ['Richard K. Johnson, PhD' , 'Louisville, KY 40221' , '(502) 376-8325'],
                ['William G. Elder Jr., PhD' , 'Dept of Family Practice/K308 Kentucky Cl 740 S Limestone Street Lexington, KY 40536-0284' , '859-257-9569'],
                ['Sarah Faith Shelton, PsyD' , '973 Breckenridge Lane #171 Louisville, KY 40207' , '502-694-9432'],
                ['Donald E. Ralph, PhD' , '430 Dudley Rd Lexington, KY 40502' , '859-351-7103'],

                ['Meghan Borne, PhD' , 'Alexandria, LA 71302' , '504-321-4488'],
                ['Lyle L. LeCorgne, PhD' , '400 Audubon Blvd, Ste 206-B Lafayette, LA 70503-2612' , '(337) 232-0060'],
                ['Seth Kunen, PsyD' , '2434 Drusilla Lane Baton Rouge, LA 70809' , '225-802-0942'],
                ['Keith Westerfield, PhD' , 'Southeast Community Health System 30574 Old Baton Rouge Hwy Hammond, LA 70403' , '225 306 2050'],
                ['Christine E. Angelloz, PhD' , 'Family Psychol Ctr, Inc. 2213 Quail Run Dr Baton Rouge, LA 70808' , '(225) 767-5650'],
                ['Clarence M. Bergeron, PhD' , '622 Belanger Street Houma, LA 70360' , '(985) 851-6257'],
                ['Jenna Brooke Rosen, PsyD' , 'Tulane University School of Medicine 1429 Tulane Avenue #8055 New Orleans, LA 70112' , '504-988-5407'],
                ['James A Van Hook III, PhD' , '1199 S. Acadian Thruway Suite 110 B Baton Rouge, LA 70806' , '225-229-7491'],
                ['James W. Quillin, PhD' , '1015 Calais Cir Alexandria, LA 71303' , '(318) 442-7355'],
                ['Irving A. Arevalo, PhD' , '5242 Citrus Blvd New Orleans, LA 70123' , '504-356-3412'],

                ['Joseph Schenkel, PhD' , 'P.O. Box 2132 South Portland, ME 04116' , '(207) 799-9621'],
                ['Anthony M. Podraza, PhD' , 'P.O. Box 282 Winterport, ME 04496' , '(207) 973-4037'],
                ['Peter F. Donnelly, PsyD' , '5 D Street South Portland, ME 04106' , '(207) 767-7001'],
                ['Kenneth B. Liberty, PhD' , 'Bangor, ME 04400' , '530-524-3346'],
                ['David A. Marks, PhD' , '250 Main Street Suite 1 Yarmouth, ME 04096' , '(207) 747-5528'],
                ['Peter Smith, PsyD' , '10150 Montgomery Blvd NE Suite 2B Albuquerque, NM 87111' , '505-900-3380'],
                ['Gregory Caron, PsyD' , '1120 Washington St Bath, ME 04530' , '207-504-4382'],
                ['Shanee Stepakoff, PhD' , 'PO Box 211 Farmington Post Office, 196 Main Street Farmington, ME 04938' , '207-578-4483'],
                ['Lambros Karris, EdD' , 'P.O. Box 318 Bangor, ME 04402-0319' , '207-570-4490'],
                ['Diane A. Tennies, PhD' , '114 Franklin St. Suite 1A Bangor, ME 04401' , '207-942-3635'],

                ['Lawrence G. Rosenberg, PhD' , '1104 Massachusetts Ave Ste 3F Cambridge, MA 02138' , '617-491-1085'],
                ['Cynthia A. Worth, EdD' , '52 Langley Rd, Ste 310D Newton Centre, MA 02459' , '(617) 630-0642'],
                ['Roberta B. Caplan, PhD' , 'Psychol Couns Ctr,  Brandeis University Mailman Building - MS060 Waltham, MA 02454' , '(781) 736-3734'],
                ['Marc Louis Copersino, PhD' , 'Westwood, MA 2089' , '617-855-2853'],
                ['Stephen P. Schlein, PhD' , '2 Wallis Ct Lexington, MA 02421' , '(781) 861-8077'],
                ['James E. Mehegan, PhD' , '15 Aldrin Rd Plymouth, MA 02360' , '(508) 747-0665'],
                ['Marsha A. Padwa, PsyD' , '46 Prentice Rd Newton, MA 02459' , '(617) 969-1247'],
                ['Stefanie M. Adams, PhD' , '217 W Main St Hyannis, MA 02601' , '(508) 771-4640'],
                ['Iris Robertson, PhD' , 'PO Box 885 South Hadley, MA 01075-0886' , '413 221 9165'],
                ['Carol R. Noble, PhD' , '21 Elm Street Great Barrington, MA 01230' , '800-824-0978'],

                ['Lisa J. Ficker, PhD' , '32254 Northwestern Hwy., Suite 250 Farmington Hills, MI 48334' , '248-613-9699'],
                ['Camille Ann Hood, PhD' , '490 E Columbia Ave, Ste. 4 Battle Creek, MI 49015' , '269-962-9611'],
                ['Margery J. Adelson, PhD' , '3742 Meadow Lane Saline, MI 48176' , '(734) 316-2352'],
                ['Elizabeth Ann Waiess, PsyD' , '4571 S. Hagadorn Road Ste. 1A East Lansing, MI 48823' , '517-336-9930'],
                ['Donna E. Thackwray, PhD' , 'Marquette, MI 49854' , '(828) 437-0755'],
                ['Randal Clay Bruce, PhD' , '999 John R Suite 211 Troy, MI 48083' , '248-624-8181'],
                ['Irene T. Mann, PhD' , '5359 Holiday Terr Kalamazoo, MI 49009' , '(269) 353-3063'],
                ['Marcie Zoref, PsyD' , '1024 East Maple Rd, B 11 Birmingham, MI 48009' , '248-593-9595'],
                ['Elissa Fronczak, PhD' , 'Plymouth, MI 48169' , '734-776-1127'],
                ['Terence L. Bradley, PhD' , '3925 Village Circle Drive Traverse City, MI 49686' , '(231) 883-3066'],

                ['Rebecca Murphy, PsyD' , '699 Commerce Drive, Suite 280 Woodbury, MN 55125' , '612-924-1919'],
                ['Stephen R. Huey, PhD' , 'Minneapolis, MN 55415' , '(952) 545-6090'],
                ['Michael Timothy Mobley Finn, PhD' , '1425 Bemidji Ave  N #1 Bemidji, MN 56601' , '(218) 444-2233'],
                ['Pamela Marjorie Peterson, PhD' , '299 West Broadway, Suite 1 (Inside of Active PT) Plainview, MN 55964' , '(507) 421-1064'],
                ['Dawn Koehler, PsyD' , '640 East Lake St Suite 222 Wayzata, MN 55391' , '952-476-5465'],
                ['Harlan J Gilbertson, PsyD' , 'Mora Psych Srvs 629 Union St S Mora, MN 55051' , '612-390-8269'],
                ['David Morris, PhD' , '6380 Osgood Ave N Stillwater, MN 55082' , '(651) 439-4040'],
                ['Shawna Marie Benson, PsyD' , '11115 Zealand Ave N, Suite #109 Soul Work Counseling Champlin, MN 55316' , '763-746-0842'],
                ['Steven J. Kuchta, PhD' , '1603 South First Street Willmar, MN 56201' , '(320) 231-5030'],
                ['Takymmea C Clayton, PhD' , 'Hennepin County Mental Health Center 1800 Nicollet Avenue Minneapolis, MN 55403' , '612-596-9438'],

                ['Ruth M. Shoemaker, PhD' , '2111 Bienville Blvd. Suite J Ocean Springs, MS 39564' , '228-875-1590'],
                ['Arazais Oliveros, PhD' , 'Mississippi State Psychology Clinic 69 Morgan Avenue Starkville, MS 39759' , '662-325-3202'],
                ['Patrick O. Smith, PhD' , 'UMMC, School of Medicine 2499 North State Street Jackson, MS 39216' , '601-984-5003'],
                ['Robert Charles Sevier, PhD' , '101 Medical Park Hattiesburg, MS 39401-9080' , '601-261-5159'],
                ['Angela J. Koestler, PhD' , 'Vicksburg, MS 39182' , '(601) 634-0118'],
                ['Patsy H. Zakaras, PhD' , 'P.O. Box 2340 Gulfport, MS 39505' , '(228) 832-5041'],
                ['Matthew Campbell, PhD' , '2004 Harris Drive Oxford, MS 38655' , '662-513-9936'],
                ['Paul Leonard, PhD' , '4645 Poplar Avenue Suite 307 Memphis, MS 38117' , '(901) 485-1848'],
                ['Jesse F. Dees, PhD' , 'Jackson Psychological Group 1611 Pear Orchard Place Jackson, MS 39211' , '(601) 981-1008'],
                ['Lisa Ansel, PhD' , '1715 Government Street Suite E, Ocean Springs, MS 39564' , '(228) 200-1100'],

                ['Jan B. Roosa, PhD' , '9236 Ward Parkway Suite 103 Kansas City, MO 64114' , '(816) 444-3366'],
                ['David A. Lipsitz, PhD' , '200 First Executive Ave St. Peters, MO 63376' , '(636) 441-3322'],        
                ['William R. Carter, PsyD' , '3611 W. Edgewood Court Springfield, MO 65807' , '417-773-3731'],            
                ['James Douglas Pettinelli, PhD' , 'St. Louis, MO 63107' , '(314) 534-7722'],            
                ['Kasey Davis, PsyD' , 'St Louis Childrens Hospital 0 Childrens Place, 3N-14 St. Louis, MO 63110' , '(314) 454-6069'],
                ['Krystle Eckhart, PsyD' , '2199 E Sunshine #316 Springfield, MO 65804' , '417-238-0530'],
                ['Philip K. Mothersead, PhD' , 'Mercy Clinic, Neuropsychology 2114 S. Fremont, Suite 3000 Springfield, MO 65804' , '(417) 820-7707'],
                ['Douglas B. Vaughan, PhD' , 'Kansas City VA Medical Center 4800 Lindwood Blvd. Kansas City, MO 64128' , '816-861-4700 x.56158'],
                ['James P. Feinberg, PhD' , '10899 Manchester Road Suite 201 Kirkwood, MO 63122' , '(314) 966-0880'],
                ['Amy D. Bertelson, PhD' , 'Washington Univ Sleep Medicine Center 1599 S. Brentwood Blvd, Suite 600 St. Louis, MO 63144' , '(314) 362-4342'],
                
                ['Karolyn W. Seidl, PsyD' , 'Livingston, MT 59046' , '443-465-1889'],
                ['John A. Platt, PhD' , '120 W Kagy Blvd Suite N Bozeman, MT 59715-6000' , '(406) 587-7468 ext. 1'],
                ['Christa Smelko, PsyD' , '24 South Ewing Street Suite 416 helena, MT 59601' , '(406) 282-1744'],
                ['J. Gary Grow, PhD' , 'Northern Montana Hospital Box 1230 Havre, MT 59501' , '406-265-7831'],
                ['Michael R. Butz, PhD' , 'Aspen Practice, P.C. P.O. Box 81545 Billings, MT 59108' , '406-294-9677'],
                ['Bowman Smelko, PsyD' , '24 S Ewing Street Suite 416 Helena, MT 59601' , '406-461-1744'],
                ['John C. Andre, PhD' , 'Billings Clinic Behavioral Health Clinic 1019 N 27th St, Ste 410 Billings, MT 59101' , '(406) 255-8550'],
                ['Angela Lynne Wagenaar, PhD' , 'Billings, MT 59101' , '406-702-6496'],
                ['Donna May Zook, PhD' , '1600 2nd Ave North, Suite 620 Great Falls, MT 59401' , '406-453-5638'],
                ['Linda Kastelowitz, PhD' , 'P.O. Box 3014 Montrose, MT 81402' , '(406) 544-8830'],

                ['Michael B. LaCrosse, PhD' , '2701 Rolling Hills Drive Norfolk, NE 68701' , '(402) 371-5306'],
                ['Roger H. Riss, PsyD' , 'Madonna Rehabilitation Hospital,  Neuropsychology  Service 5400 South St Lincoln, NE 68506' , '(402) 413-3551'],
                ['Sean Akers, PsyD' , '847 South 93rd Street Omaha, NE 68114' , '402-955-3900'],
                ['Abby Lea Bjornsen, PhD' , '6000 Dodge Street Roskens Hall 101H Omaha, NE 68182' , '402-554-2760'],
                ['Patricia J. Blake, PhD' , '439 Regency Parkway Drive Suite 230 Omaha, NE 68114' , '(402) 934-2661'],
                ['Kelly A. Morrow, PhD' , 'Saint Paul VI Institute 6900 Mercy Road Omaha, NE 68106-2604' , '(402) 390-6600'],
                ['Meredith Decker, PhD' , '1100 N 10th Street Beatrice, NE 68310' , '402-228-3436'],
                ['Eric Snitchler, PhD' , '1305 Andrews Drive Norfolk, NE 68702' , '402-851-4026'],
                ['LuAnne Even, PsyD' , '12000 Q St Omaha, NE 68137' , '402-592-0328'],
                ['Chelsi Ann Klentz Davis, PhD' , '1918 S 40th St. Ste 111 Lincoln, NE 68506' , '402-235-8181'],

                ['Carroll R. Thomas, PhD' , '3469 East Russell Road, Suite 207 Las Vegas, NV 89120' , '(702) 369-3704'],
                ['Marvin Levenson, PhD' , '4599 Kietzke Lane, C-122 Reno, NV 89502' , '775-823-9133'],
                ['Robyn Donaldson, PhD' , 'Las Vegas, NV 89122' , '702-508-9181'],
                ['Yue Huang, PhD' , 'Pennington Student Achievement Center, Suite 419 1664 N. Virginia Street, Mail Stop 0080 Reno, NV 89557-0080' , '775-682-9258'],
                ['Gwenyth G. OBryan, PhD' , '324 Flint St Reno, NV 89501' , '(775) 329-3339'],
                ['Alfredo M. Amezaga Jr., PhD' , 'PO Box 19159 Reno, NV 89511' , '800-401-5593'],
                ['Tanisha M Ranger, PsyD' , 'Henderson, NV 89014' , '484-483-3093'],
                ['Jacqueline Panish, PhD' , '2964 S. Jones Blvd Suite B Las Vegas, NV 89146' , '(702) 396-9000'],
                ['David W. Schroeder, PhD' , 'Henderson, NV 89051' , '702-556-0341'],
                ['Ruth Gentry, PhD' , '10630 Professional Circle Suite A Reno, NV 89521' , '775-826-6218'],

                ['Daniel C. Williams, PhD' , 'Dover, NH 3819' , '(603) 749-4462'],
                ['Brian J Taracena, PsyD' , 'Hampton, NH 3841' , '603 689 7938'],
                ['Robert G. Hlasny, PhD' , '35 Country Club Road Ste 926 Gilford, NH 03249-6978' , '(603) 528-6106'],
                ['William T. Griffith, PhD' , '277 Lafayette Road Building E Portsmouth, NH 03801-5455' , '603-436-0854'],
                ['Christopher Spofford, PhD' , 'Hanover Psychiatry 22 South Main St.  2B Hanover, NH 03755' , '(603) 277-9110'],
                ['C. Patricia Hanley, PhD' , 'Durham, NH 3823' , '(603) 817-5170'],
                ['Pamela Lee Gallant, PsyD' , 'Comprehensive Counseling Connections 513 South Street Bow, NH 03304' , '603-856-8163'],
                ['Thomas F. Higgins, EdD' , '210 Route 117 Sugar Hill, NH 03586' , '(603) 823-8881'],
                ['William A. Dinan II, PhD' , '155 Hedgerose Ln Hopkinton, NH 03229-2029' , '(603) 226-4457'],
                ['Bradley S. Reynolds, EdD' , 'Hampstead Hosp 217 East Rd Hampstead, NH 03841' , '(603) 329-5311'],

                ['Jacqueline Ann Rondeau, PsyD' , '69 Park Street Montclair, NJ 07042' , '973-743-4555'],
                ['John Tarpinian, EdD' , '171 Broadway Suite 209 Woodcliff Lake, NJ 07677-8077' , '(201) 930-1514'],
                ['Mary Jane Weiss, PhD' , 'Princeton Junction, NJ 8549' , '609-203-6445'],
                ['Richard John Mucowski, PhD' , 'Serra Associates LLC 336 Market St Suite 4 Saddle Brook, NJ 07663' , '(201) 880-7920'],
                ['Julia King, PsyD' , '114 Broadway, Floor 5, NJ 10006' , '646-859-2822'],
                ['Nathalie Edmond, PsyD' , '1329 Parkway Avenue Suite 7 Ewing, NJ 08628' , '609-403-6359'],
                ['Glen Sherman, PhD' , 'W. Paterson Univ, Univ Commons Rm 116 300 Pompton Road Wayne, NJ 07470-2108' , '(973) 720-2761'],
                ['Michele C. Rabinowitz, PsyD' , '224 Hwy 35 Red Bank, NJ 07701' , '(732) 741-2202'],
                ['Ronald G. Silikovitz, PhD' , '515 Pleasant Valley Way West Orange, NJ 07052' , '(973) 736-2424'],
                ['Jonathan H. Mack, PsyD' , '799 Denow Road Suite S Pennington, NJ 08534' , '(609) 890-8844'],

                ['Deborah Simon, PhD' , 'NM VA Med Ctr BHCL115, Bldg. 52, Office 140 1501 San Pedro SE Albuquerque, NM 87108' , '505-265-1711 ext. 2091'],
                ['Ryan Charles Warner, PhD' , 'Albuquerque, NM 87115' , '708-925-7719'],
                ['Mary A. Cotten, PhD' , 'P.O. Box 2069 Alamogordo, NM 88311' , '575-439-1550'],
                ['Mike Kim, PsyD' , '2899 Louisiana Boulevard, NE Suite C-1 Albuquerque, NM 87110' , '505-884-7873'],
                ['Wynne E. Broms, PhD' , 'Las Cruces, NM 88010-0910' , '(575) 571-9415'],
                ['Linda C. Daniels, PhD' , '1989 E. Lohman Ste 202 Las Cruces, NM 88001' , '575-528-6166'],
                ['Zachary Schmidt, PhD' , 'Albuquerque, NM 87119' , '505-265-1711 ext. 6079'],
                ['Janet K Robinson, PhD' , '200 Tulane SE Albuquerque, NM 87106' , '505-206-7558'],
                ['Paul Wesley Bagwell Jr., PsyD' , 'New Mexico Behavioral Health Institute, Forensic Division 3694 Hot Springs Boulevard Las Vegas, NM 87701' , '505-454-2682'],
                ['Kim Smith, PhD' , 'Albuquerque, NM 87109' , '(505) 884-8595'],

                ['Kathleen M. Doyle, PhD' , '28 Haviland Ave Glens Falls, NY 12801' , '(518) 792-6495'],
                ['Lawrence S. Stallman, PhD' , '199 Delaware Avenue Delmar, NY 12054' , '(518) 439-0090'],
                ['Adeline S. Levine, PhD' , '504 W End Ave, Apt 1B New York, NY 10024' , '(212) 721-1009'],
                ['Karen L. Lombardi, PhD' , '9 Beech Court Glen Cove, NY 11542' , '516-241-9986'],
                ['Pascal E. Sauvayre, PhD' , '48 W 72nd St, #1A New York, NY 10023' , '(212) 874-2652'],
                ['Omrit Silberstein, PsyD' , '1599 Harrison Ave Suite G105A-2 Mamaroneck, NY 10543' , '646-731-9414'],
                ['Jonathan Leonard Kanegson, PsyD' , 'New York, NY 10127' , '646-634-5080'],
                ['Michael Joseph Parrella, PhD' , 'Miller Place, NY 11763' , '631-474-6136'],
                ['Thomas Zastowny, PhD' , '817 Coventry Drive Webster, NY 14580' , '630-258-4271'],
                ['David L. Speights, PhD' , '140 East 55th St, #7C New York, NY 10022' , '(212) 308-0313'],

                ['Antonio Enrique Puente, PhD' , '1507 Military Cutoff Road, Suite 303 Wilmington, NC 28403' , '910-509-9371'],
                ['Lucy C. Daniels, PhD' , '628 Oberlin Rd Raleigh, NC 27605' , '(919) 755-6902'],
                ['Gary L. Patrick, PhD' , '102 Waterhouse Court Mooresville, NC 28117' , '(704) 483-9469'],
                ['Lisa Long, PsyD' , '1523 Duckworth Ave Charlotte, NC 28208' , '980-267-5153'],
                ['Dane Robert Whicker, PhD' , 'Durham, NC 27706' , '919-684-1131'],
                ['George Popper, PhD' , '106 E. Franklin Street Monroe, NC 28112' , '704-238-9011'],
                ['Keith W. Jennings, PhD' , 'Pinehurst, NC 28373' , '910-634-0277'],
                ['John Wesley Hall, PhD' , '1800 E 5th Street Suite 210 Charlotte, NC 28204' , '704-258-5553'],
                ['Chad Coder, PsyD' , 'Chapel Hill, NC 27515' , '845-901-5130'],
                ['Amy Johnson, PhD' , '2215 S. Miami Blvd Ste 103 Durham, NC 27703' , '919-504-1022'],

                ['Margo Ruth Norton, PhD' , 'Mental Health Service Line VA Medical Center, 2100 N Elm Street Fargo, ND 58102' , '701-232-3241'],
                ['Tricia Cook Myers, PhD' , 'Sanford Eating Disorders & Weight Mngmnt Ctr 1716 University Dr S Fargo, ND 58122' , '701-234-4111'],
                ['Desiree Zielke, PhD' , '3124 41st St S Fargo, ND 58104' , '701-551-1840'],
                ['Jon C. Ulven, PhD' , 'Sanford Health 2399 32nd Ave S Fargo, ND 58103' , '701-234-3100'],
                ['Sue A. Russell, PhD' , '627 7th Ave S Grand Forks, ND 58201' , '(701) 746-8737'],
                ['Eileen Mary Stone, PsyD' , '1307 23rd St. S Fargo, ND 58103' , '(701) 297-7540'],
                ['Timothy T. Eaton, PhD' , '1704 4th Ave NW Minot, ND 58703' , '(701) 839-0474'],
                ['Renee L. Boomgaarden, PhD' , 'Badlands Human Service Center 299 13th Ave W, Ste. 1 Dickinson, ND 58601-4857' , '(701) 227-7567'],
                ['Megan Spencer, PsyD' , 'Fargo, ND 58103' , '701-364-8900'],
                ['Michael D. Paulson, PhD' , 'Solutions Behavioral Healthcare 890 Belsly Boulevard Moorhead, MN 56560' , '(218) 287-4338'],

                ['Paul A. Deardorff, PhD' , '4216 Smith Rd. Cincinnati, OH 45212' , '513-871-7285'],
                ['D. Richard Bromberg, PhD' , '7025 Corporate Way Suite 104 Centerville, OH 45459' , '(937) 439-1224'],
                ['Thomas L. Kuhlman, PhD' , '4050 Retreat Drive Blue Ash, OH 45241' , '(952) 212-8021'],
                ['Christina A. Kaminsky, PhD' , 'Hollister Ctr  Suite 199 7659 Montgomery Rd Cincinnati, OH 45236' , '(513) 621-5001'],
                ['David Andrew Woodall, PsyD' , 'Hillsboro, OH 45132' , '513-570-4506'],
                ['Donald J. Tosi, PhD' , 'Northwoods Psychological Consulting 499 W. Wilson Bridge Road, Suite 450 Worthington, OH 43085' , '(614) 847-1744'],
                ['Meredith E. Reid, PhD' , '7680 Tylers Place Blvd Suite 2 West Chester, OH 45069' , '513-779-3888'],
                ['Nancy Duff-Boehm, PhD' , '26776 Lorain Rd Suite 716 North Olmsted, OH 44070' , '440-777-9200'],
                ['Gordon A. Harris, PhD' , '5399 N. Main St Dayton, OH 45415' , '(937) 274-2226'],
                ['Andrew J. Sodergren, PsyD' , 'Ruah Woods Psychological Services 6674 Wesselman Rd. Cincinnati, OH 45248' , '(513) 407-8878'],

                ['Catharine A. Abbott, PhD' , 'Northwest Mental Hlth Assoc 3831 North Meridian Oklahoma City, OK 73112' , '(405) 949-9322'],
                ['Kristin Ober, PhD' , '8809 S. Yale Ave. Suite L Tulsa, OK 74137' , '539-302-7025'],
                ['Grady L. Blackwood, PhD' , '3036 NW 63rd Street Suite 255 Oklahoma City, OK 73116-3637' , '(405) 843-8026'],
                ['Joseph B. Couch, PhD' , '6302 Waterford Boulevard Suite 200 Oklahoma City, OK 73118' , '(405) 840-9130'],
                ['Jerry N. Duncan, PhD' , '7148 S Braden Avenue Tulsa, OK 74136' , '918-740-9588'],
                ['Bevan Todd Graybill, PhD' , '332 S 38th, Ste K Muskogee, OK 74401' , '(918) 683-8827'],
                ['Douglas Gentz, PhD' , '5508 S. Lewis Avenue Tulsa, OK 74105' , '918-742-0700'],
                ['Gary R. Lindsay, PhD' , 'Moore, OK 73159' , '405-419-6103'],
                ['Minor W. Gordon, PhD' , '1412 N. Muskogee Place Claremore, OK 74017' , '(918) 747-5308'],
                ['Pamela Correia Fischer, PhD' , 'Dept Vet Affairs Med/Prim Care Mntl Hlth 920 NE 13th St, #111AC Oklahoma City, OK 73104' , '405-456-4106'],

                ['Lauren Hoffman, PsyD' , '1219 SW Morrison St Suite 929 PORTLAND, OR 97205' , '503-994-8811'],
                ['Suzanne R. Gascoyne, PhD' , 'P.O. Box 50590 Eugene, OR 97405' , '(541) 844-1834'],
                ['Timothy James Neary, PsyD' , '18839 SW Boones Ferry Rd Ste 208 Tualatin, OR 97062' , '(503) 427-2394'],
                ['William H. Winkler, PhD' , '1011 SW King Ave, Ste 204 Portland, OR 97205' , '(503) 243-3376'],
                ['S. Joseph DeWitz, PhD' , 'Univ OR Counseling/Testing Center 1589 East 13th Avenue Eugene, OR 97403' , '541-346-3227'],
                ['David N. Sweet, PhD' , 'Salem, OR 97305' , '(503) 510-9094'],
                ['Kevin B. McGovern, PhD' , 'P.O. 10262 Portland, OR 97296' , '(503) 644-6600'],
                ['Diane Melinda Hediger, PhD' , 'PO Box 5242 Eugene, OR 97405' , '541-556-8332'],
                ['Carol S. Jones, EdD' , '4230 N. Interstate Avenue Portland, OR 97217' , '503-288-6066'],
                ['Greta Lyders, PhD' , 'Portland, OR 97218' , '503-342-2510'],

                ['Robert L Rider, PhD' , 'Wayne, PA 19086' , '215-988-9911'],
                ['Lucie Aupperlee Pentz, PsyD' , '28 Still Pond Drive New Freedom, PA 17349' , '717-654-6025'],
                ['John Markey, PsyD' , '79 North Main Street Suite 1C Doylestown, PA 18901' , '215-348-2757'],
                ['Jessica Avart, PsyD' , '2419 Carpenter St Philadelphia, PA 19146' , '610-585-1447'],
                ['Judy R. Spring, PsyD' , '442 White Swan Way Langhorne, PA 19047' , '(215) 460-3952'],
                ['Michelle Murray, PhD' , '1499 Walnut St., Suite 1340 Philadelphia, PA 19102' , '484-469-0337'],
                ['Lisa Strauch Scott, PsyD' , 'Pittsburgh, PA 15221' , '412-652-8811'],
                ['Jennifer Keller, PsyD' , 'Pittsburgh, PA 15220' , '412-822-1954'],
                ['Andrea M. Delligatti, PhD' , '26 Hillbrook Cir Malvern, PA 19355' , '(610) 647-1013'],
                ['Edward J. Purzycki, PhD' , 'Central PA Neuro Ctr 2099 Harrisburg Pike, PO Box 3200 Lancaster, PA 17604' , '(717) 544-3172'],

                ['Elizabeth Gibbons Holtzman, PhD' , 'Dept of Counseling, Ed. Leadership & School Psych (CEP) 599 Mt. Pleasant Ave, Adams 119 Rhode Island College Providence, RI 02908' , '(401) 456-8051'],
                ['Aliza Krieger, PhD' , '14 8th Street Providence, RI 02906' , '401-286-6703'],
                ['Claire Wiseman, PhD' , 'Barrington, RI 2805' , '203-891-6787'],
                ['Louis Turchetta, EdD' , '1034 Post Rd Warwick, RI 02888' , '(401) 785-0040'],
                ['Julio E Sabater, PhD' , 'SabaterLAB [Sabater Laboratory for Psychological Innovations, Inc] 254 MAIN STREET, SUITE 206 PAWTUCKET, RI 02860' , '401-327-2442'],
                ['Rebecca Goldman Boswell, PhD' , 'New Haven, CT 6518' , '203-343-0286'],
                ['Louis A. Cerbo, EdD' , '89 Tepee Trail Cranston, RI 02921' , '401-447-7180'],
                ['Phillip Dang, PsyD' , 'North Kingston, RI 2851' , '860-888-3833'],
                ['Lori L. McKinsey, PsyD' , '43 Love Ln Warwick, RI 02886' , '(401) 885-0462'],
                ['Michael Eltz, PhD' , '26 Knowles Street Lincoln, RI 02865' , '401-714-7440'],

                ['Thomas E Thorsheim, PhD' , '1325 Haywood Road Suite 102 Greenville, SC 29615' , '864-421-0098'],
                ['Peter Harriman Lewis, PsyD' , 'Johns Island, SC 29454-6725' , '843-963-6852'],
                ['Richard McBride Ashbrook, PhD' , '30 S Eastover Beaufort, SC 29906' , '(614) 506-6718'],
                ['Mary Larson Svendsen, PhD' , '2137 Ashley Phosphate Rd, Ste 203 North Charleston, SC 29406' , '(843) 569-2904'],
                ['Jay P. Ginsberg, PhD' , 'Columbia Neuropsychology Service LLC 5 Viking Ct Columbia, SC 29229' , '(803) 865-2024'],
                ['Avie J. Rainwater III, PhD' , 'LifeCare Psychology Group, LLC 548 W. Evans St. Florence, SC 29502-4131' , '(843) 667-4949'],
                ['Nancy J. Warren, PhD' , 'Comprehensive Psychiatric Care Specialists 25A Bee St Charleston, SC 29425' , '(843) 792-9396'],
                ['Gordon E. Brown Jr., PhD' , 'West Columbia, SC 29169' , '(803) 351-4004'],
                ['Peter R. Kilmann, PhD' , 'Suite 227, 115 Atrium Way Columbia, SC 29223' , '(803) 788-9243'],
                ['Crystal Hank, PsyD' , '912 Bowman Road Suite 104 Mount Pleasant, SC 29464' , '843-216-2535'],

                ['Joseph G. Blackinton, PhD' , 'Heartland Psychol Svcs 903 West 23rd St, Ste 101 Yankton, SD 57078' , '(605) 665-0841'],
                ['Robert R. Perkinson, PhD' , 'Keystone Treatment Ctr P.O. Box 158 Canton, SD 57013' , '(605) 987-2872'],
                ['Suzanne Marie Keizer, PsyD' , 'Sioux Falls, SD 57105' , '605-444-9700'],
                ['Scott Cherry, PhD' , '702 Odde Pl Rapid City, SD 57701' , '605-755-1326'],
                ['Mary C Curran, PhD' , '1004 West 8th Street Yankton, SD 57078' , '605-668-6000'],
                ['William D. Pierce, PhD' , '2702 Fox Run Parkway Suite 200 Yankton, SD 57078' , '(605) 665-0258'],
                ['Rebecca J. Watson, PhD' , '3129 W 57th Street Suite 108 Sioux Falls, SD 57108' , '605-335-5888'],
                ['Laura Wittnebel Hughes, PsyD' , 'Rapid City, SD 57701' , '605-858-9989'],
                ['Arianna Elizabeth Sparks, PhD' , 'Sioux Falls, SD 57107' , '605-444-9700'],
                ['Taryn S. Van Gilder-Pierce, PhD' , '2702 Fox Run Parkway Suite 200 Yankton, SD 57078' , '(605) 665-0258'],

                ['Jacqueline M Klaver, PhD' , '2199 21st Avenue S Suite 300 Nashville, TN 37212' , '615-933-3571'],
                ['William E. McGee, EdD' , '1814 McCallie Avenue Chattanooga, TN 37404-3026' , '(423) 756-2894'],
                ['Tracy McKee Agostin, PhD' , '8819  Trinity Road Suite 202 Cordova, TN 38018' , '901-756-8398'],
                ['Sidney Rose Ornduff, PhD' , '253 Court Avenue Memphis, TN 38103' , '(901) 240-5736'],
                ['Lindsay Nicole Martinez, PsyD' , 'Johnson City, TN 37600' , '423-930-8116'],
                ['Darini Arulpragasam, PhD' , 'Knoxville, TN 37930' , '217-649-4431'],
                ['Sheena E. Rose, PhD' , '1921 Exeter Road Germantown, TN 38138-2955' , '(901) 759-0984'],
                ['Stephanie Vaughn, PsyD' , '1199 Division St. Suite 405 Nashville, TN 37203' , '615-274-8400'],
                ['Joel W. Chapman, PhD' , '999 S. Cooper St. Memphis, TN 38104' , '(901) 844-4357'],
                ['Lynne D. Zager, PhD' , 'Psychol Svcs 155-C West University Parkway Jackson, TN 38305' , '(731) 394-0749'],

                ['Geraldine Merola Barton, PhD' , '14602 Huebner Road, Building 6 Suite 105 San Antonio, TX 78230' , '210-722-9428'],
                ['Yolanda Bruce Brooks, PsyD' , 'Dallas, TX 75379' , '972-233-2360'],
                ['Ron R. Eubanks, PhD' , '17479 Dallas Parkway #211 Dallas, TX 75287' , '(972) 713-9098'],
                ['Leanne Marie Buttross, PhD' , 'Corpus Christi, TX 78413' , '361-334-0256'],
                ['Frank A. Pugliese, PhD' , '2026 South 61st Street Suite 126 Temple, TX 76504' , '(254) 774-8272'],
                ['Julia A. Hickman, PhD' , 'Austin, TX 78700' , '(512) 581-8981'],
                ['Kenneth E. McTague, PhD' , '6204 W 39th Amarillo, TX 79109' , '(806) 352-8773'],
                ['Michael L. Adams, PhD' , '4108 Whitmire Ln (route 12) Killeen, TX 76543-2817' , '(254) 699-6457'],
                ['Janice M. Morris, PhD' , '8139 N. Mopac Expy Bldg. 3, Suite 225 Austin, TX 78759-8837' , '(512) 346-2332'],
                ['John M. Sell, PhD' , '908 Bandera Court Allen, TX 75013-1135' , '(214) 673-1673'],

                ['John David Perovich, PsyD' , '1784 East 1450 South Suite 250 Clearfield, UT 84015' , '801-773-0535'],
                ['Samuel J. Goldstein, PhD' , 'Neurology, Learning & Beh Ctr 229 South 500 East, Ste 100 Salt Lake City, UT 84102-2015' , '(801) 532-1484'],
                ['Robert F. Pramann Jr., PhD' , 'Shepherd Staff Christian Couns Ctr. dba Christian Counseling Centers of Utah 524 E 4500 S, Suite F 125 Salt Lake City, UT 84107-2995' , '801-268-1564 ext 3'],
                ['John Davis VanderVeen, PhD' , 'Salt Lake City, UT 84105' , '248-736-1422'],
                ['Craig J Bryan, PsyD' , '259 S. Central Campus Dr., Room 205 Salt Lake City, UT 84112' , '801-587-7978'],
                ['Eric Kebker, PhD' , 'Cottonwood Heights, UT 84120' , '801-777-7909'],
                ['Richard T. Grow, EdD' , 'Ogden, UT 84402' , '(801) 476-9706'],
                ['Tayler Wayment, PsyD' , 'Ogden, UT 84403' , '801-387-5600'],
                ['Ted A Harris, PhD' , '5690 S Redwood Rd #16 Taylorsville, UT 84123' , '801-265-3895'],
                ['Jonathan Bone, PsyD' , '76 South 700 East Suite 220 Salt Lake City, UT 84102' , '801-758-7370'],

                ['Marcia W. Hemley, PhD' , '91 Adams St Burlington, VT 05401' , '(802) 863-6114'],
                ['John David Petty, PsyD' , 'PO Box 599 Putney, VT 05346' , '802-258-1222'],
                ['Barbara A. Belcher-Timme, PsyD' , '138 Main St Ste 708 Brattleboro, VT 05301' , '(802) 2574393X1'],
                ['Hallie A.S. Lovett, PhD' , 'Pawlet, VT 05760' , '802-353-0878'],
                ['Kraig Libstag, EdD' , '14 Pinecrest Drive Unit 4 Essex Junction, VT 05452' , '(802) 865-3450'],
                ['Jason M Schmotzer, PsyD' , 'Brattleboro, VT 05300' , '802-258-6773'],
                ['William Halikias, PsyD' , '749 Lakeridge Road Guilford, VT 05301-8507' , '(802) 254-2231'],
                ['Elaine Dahl, PhD' , '327 Main Street Ste. 102 Newport, VT 05855' , '802-334-8484'],
                ['Pamela Swift, PhD' , 'Burlington, VT 05400' , '802-847-4563'],
                ['Richard W. Davis, PhD' , 'Assoc in Psychol 91 Adams St Burlington, VT 05401' , '(802) 863-6114'],

                ['Lorraine B. Wodiska, PhD' , '6013 28th Street North Arlington, VA 22207' , '703-536-5545'],
                ['Christine Brendle, PhD' , '299 North Washington St Suite 607 Alexandria, VA 22314' , '571-748-7844'],
                ['James F. Lassiter, PhD' , '4559 South Blvd. Suite 300 Virginia Beach, VA 23452' , '757-228-5635'],
                ['Francis Christy McFarland, PhD' , '104A Lew Dewitt Blvd #111 Waynesboro, VA 22980' , '434-242-3109'],
                ['Binita Amin, PhD' , '1807 T St. NW Washington, DC 20009' , '202-854-1438'],
                ['Karen L. Larson, PhD' , '19414 Deerfield Avenue Suite 308 Leesburg, VA 20176' , '(703) 443-1599'],
                ['Bryn Elizabeth Schiele Moore, PhD' , '9100 Stony Point Parkway Apt. 1329 Richmond, VA 23235' , '210-601-1618'],
                ['K Jeffrey Schlichter, PhD' , 'Norfolk, VA 23509' , '757-641-4217'],
                ['Gary A. Curtis, PhD' , '1905 Cutbank Lane Elkton, VA 22827' , '276-601-6197'],
                ['Jennifer Marceron Glienke, PhD' , '5690 Columbia Pike, Suite 200 Falls Church, VA 22041' , '(703) 998-5606 ext. 306'],

                ['Sheppard A. Salusky, PhD' , '1799 Westlake North, Ste 305 Seattle, WA 98109' , '(206) 285-6915'],
                ['Karen L. Syrjala, PhD' , '1099 Fairview Ave N, D5-220 Seattle, WA 98109-1024' , '(206) 667-4579'],
                ['Jessica Leigh Viergutz, PsyD' , '106 South Grand Ave, Suite D Pullman, WA 99163' , '509-332-2600'],
                ['Karen Sanders, PhD' , '1599 E Jeferson #601 Seattle, WA 98122' , '206-269-0290'],
                ['Stephen M. Langer, PhD' , '1020 Legion Way Olympia, WA 98501' , '(360) 754-8540'],
                ['Robert B. Miller, PhD' , '1600 116 Avenue NE Suite 105 Bellevue, WA 98004' , '(425) 455-5678'],
                ['Kris S. Morgan, PhD' , '3399 Harbor Ave SW Seattle, WA 98126' , '(206) 290-5954'],
                ['David Edward Walker, PhD' , '900 Boren Suite 1300 Seattle, WA 98104' , '509-307-0967'],
                ['Denise C. K. Fort, PhD' , '1299 114th Avenue, S.E. Suite 210 Bellevue, WA 98004' , '202-747-4085'],
                ['Helene G. Russ, PhD' , '209 W. Galer St. Seattle, WA 98119' , '206-283-9637'],

                ['Victor Cerra, EdD' , 'McLain Bldg., Ste 221 40 12th St Wheeling, WV 26003' , '(304) 232-0190'],
                ['Edward Baker, PhD' , 'Morgantown, WV 26504' , '304-598-2300'],
                ['Steven F. Dreyer, PhD' , '311 6th Avenue Suite 2 Charlestown, WV 25303-1242' , '(304) 768-6170 ext 102'],
                ['Sharon J. Joseph, PhD' , '57 Physicians Way Elkins, WV 26241' , '(304) 637-5426'],
                ['Emily Marie Selby-Nelson, PsyD' , 'Charleston, WV 25311' , '304-984-1576'],
                ['C. David Blair, PhD' , 'Center For Health Psychology, Inc. 178 Summers Street, Suite 710 Charleston, WV 25301' , '(304) 549-1353'],
                ['Stephanie Nicole Turner McGraw, PsyD' , '2003 Professional Court Martinsburg, WV 20401' , '304-596-5780'],
                ['Scott Alan Fields, PhD' , 'Dept of Family Med, 4th Fl 3200 MacCorkle Ave SE Charleston, WV 25304' , '304-388-4649'],
                ['David A. Clayman, PhD' , 'Clayman & Associates,pllc 1096 Fledderjohn Road, Suite 3 Charleston, WV 25314' , '304-345-0880'],
                ['Raymond Kim DiPino, PhD' , 'WVU School of Med/Charleston 3199 MacCorkle Ave. SE, 5th Floor Charleston, WV 25304' , '304-388-1026'],

                ['David W. Minden, PhD' , '4321 Upland Dr. Madison, WI 53705' , '(608) 233-0657'],
                ['Gary R Gregg, PsyD' , '889 N. Elm Grove Road Suite 205 Elm Grove, WI 53122' , '262-780-0991'],
                ['Felix Savino, PhD' , 'University of Wisconsin-Madison 332 East Campus Mall, Rm 7436 Madison, WI 53715' , '(608) 263-4566'],
                ['Sarah Kay Sengstock, PhD' , 'N26 W23953 Paul Road Suite 206 Pewaukee, WI 53072' , '(262) 347-0701'],
                ['Martin J. Poe, PsyD' , '5199 Washington Racine, WI 53406' , '(262) 637-8488'],
                ['Denise C. Valenti-Hein, PhD' , 'Menasha, WI 54951' , '920-428-0787'],
                ['Bruce W. Jungerberg, PhD' , '1894 Abby Road Cumberland, WI 54829' , '(715) 822-3800'],
                ['Michael S. Kotkin, PhD' , '9414 W. Forest Home Ave Suite 104 Hales Corners, WI 53130' , '414-858-9191'],
                ['Lisa Brown McGuffey, PhD' , '3534 John Muir Drive Middleton, WI 53562' , '608-263-6100'],
                ['Susan Oestreicher, PhD' , '443 N. Westhill Blvd. Appleton, WI 54914' , '920-750-7000'],

                ['Heidi Maxwell, PsyD' , 'Cheyenne, WY 82008' , '707-301-9344'],
                ['Jennifer Ann Barth, PhD' , '1919 Thomes Avenue, Suite 500 Cheyenne, WY 82001-3547' , '307-640-7720'],
                ['Ralph Henry Louis Jr., PhD' , '115 South 3rd Street Basin, WY 82410' , '307-568-2020'],
                ['Theresa Anne Faulkner, PhD' , '174 Pine Street Buffalo, WY 82834' , '(307) 684-5828'],
                ['William F. Heineke, EdD' , 'P.O. Box 3245 Gillette, WY 82717' , '(307) 689-3522'],
                ['Mark J. Watt, PhD' , '525 Regency Drive Laramie, WY 82070' , '(307) 745-5414'],
                ['Anne Bunn, PhD' , '1464 N. 4th Street Ste 113 Laramie, WY 82072' , '307-399-7499'],
                ['Jacques P. Herter, PhD' , '534 W. Yellowstone Suite 202 Casper, WY 82601' , '(307) 235-9004'],
                ['Aimee Colleen Foster, PsyD' , 'Cheyenne, WY 82000' , '909-353-4193'],
                ['Karen Checketts, PhD' , '104 Carriage Drive Evanston, WY 82930' , '801-520-4917']])
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

            <div className="hero">
                <div className="container" >

                        <div className="text-wrapper w-full">
                            <h1 className="title">Find a Therapist</h1>
                            {/* <h3>
                                Find a Therapist near you by inputting your state's acronym (only applicable in the United States).
                            </h3> */}
                            <div id="searchbar" className={therapistStyles.searchBar} >
                                {/* <div className={therapistStyles.findTherapistBox}>
                                    <p> FIND A THERAPIST </p>
                                </div> */}

                                <div className={therapistStyles.stateBox}>
                                    <form onSubmit={this.submitForm}>
                                        <input className={therapistStyles.placeholder} onChange={this.textName} placeholder="ENTER STATE'S ACRONYM" required ></input>
                                    </form>
                                </div>

                                <div className={therapistStyles.searchBox}> 
                                    {/* <AddRowButton addRow = {this.addRow} /> */}
                                    <button className = { therapistStyles.btn } onClick={this.submitForm} >
                                        <MdSearch color="#7f7f7f" className={therapistStyles.icon} />
                                    </button>
                                </div>
                            </div>
                            {/* <Tooltip delay={0} placement="top" target="searchbar">
                                Only applicable in the US.
                            </Tooltip> */}
                    </div>
                    <div className={therapistStyles.subtext}>Only applicable in the US</div>
                        <table className={therapistStyles.table}>
                            <TableHeaders headers = {headers} />
                            <tbody>
                                {
                                    rows.map(row => <TableRow row={row}/>)
                                }
                            </tbody>
                        </table>
                </div>
            </div> 
            </>
        );
    }
    
}

const TableHeaders = ({ headers }) =>
  <thead className = { therapistStyles.th }>
    <tr>
      { headers.map(header => <th className={therapistStyles.headerColor}>{ header }</th>) }
    </tr>
  </thead>

const TableRow = ({ row }) =>
  <tr className = { therapistStyles.td } >
    { row.map(cell => 

     <td className={therapistStyles.hover}>
        {cell}
    </td>
        
    )}
  </tr>


export default Therapists;
