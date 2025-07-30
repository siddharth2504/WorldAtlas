
import {FaLongArrowAltRight} from "react-icons/fa"
import { NavLink } from "react-router-dom"

export const CountryCard = ({country}) =>{

    const {flags,name,capital,region,population} = country

    return(
    <li className="country-card card">
       <div className="container-card bg-blue-box">

        <img src ={flags.png} alt={flags.alt}/>

        <div  className="countryInfo" >

            <p className="card-title">
                  
                {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
            </p>

            <p>
                <span className="card-description">Population:</span>
                {population.toLocaleString()}
            </p>

            <p>
                <span  className="card-description">Reigon:</span>
                {region}
            </p>

            <p>
               <span  className="card-description">Capital:</span> 
               {capital[0]}
            </p>


                <NavLink to={`/country/${name.common}`}>
                 
                  <button>Read More <FaLongArrowAltRight /></button>

                </NavLink>
           

        </div>

       </div>


    </li>
    
)
}