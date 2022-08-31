import React from "react";
import Logo from './images/Logo2.png';
import { countries } from 'country-flag-icons'
const Navbar = ()=>{
    return(
        <div>
          <nav>
            <div className="logo-image">
                <img src={Logo}/>

                <nav>
                    <ul className="navbar">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BOOK RIDE</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">DIGINEWS</a></li>

                    <div class="nav-dropdown">
                    <button class="dropbtn">COUNTRY

                    </button>
                    <div class="dropdown-content">
    
                    <a href="#"><img className="ken" alt="Kenya" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/KE.svg"/></a>
                    <a href="#"><img className="uga" alt="Uganda" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UG.svg"/></a> 
                    <a href="#"><img className="rwa" alt="Rwanda" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RW.svg"/></a>
                    <a href="#"><img className="sout" alt="South Sudan" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SS.svg"/></a>
                    <a href="#"><img className="som" alt="Somali" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SO.svg"/></a>
                    <a href="#"><img className="eri" alt="Eritrea" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ER.svg"/> </a>
                    <a href="#"><img className="ethi" alt="Ethiopia" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ET.svg"/> </a>
                    <a href="#"><img className="dji" alt="Djibouti" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DJ.svg"/> </a> 
            
                    </div>  
                    </div>
                       
                    </ul>
                </nav>
            </div>
           
            </nav>   
        </div>
    )
}
export default Navbar