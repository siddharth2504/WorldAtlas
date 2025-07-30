import axios from 'axios';



const api=axios.create({
    baseURL:"https://restcountries.com/v3.1",
})



//HTTP GET 
export const getCountryData = () =>{
  
  return api.get("/all?fields=name,population,region,capital,flags");

}

// HTTP GET FOR INDIVIDUAL COUNTRY DATA

export const getCountryIndData = (Countryname) =>{
    return api.get(
        `/name/${Countryname}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    )
}



//   https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags