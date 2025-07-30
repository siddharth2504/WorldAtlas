import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

//HTTP GET 
export const getCountryData = async () => {
  try {
    return await api.get("/all?fields=name,population,region,capital,flags");
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error; 
  }
};

// HTTP GET FOR INDIVIDUAL COUNTRY DATA
export const getCountryIndData = async (Countryname) => {
  try {
    return await api.get(
      `/name/${Countryname}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
  } catch (error) {
    console.error(`Error fetching data for country ${Countryname}:`, error);
    throw error; 
  }
};