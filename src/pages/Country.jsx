
import { getCountryData } from "../api/postApi"
import { useEffect,useTransition,useState } from "react"
import { CountryCard } from "../components/Layout/CountryCard";
import { Loader } from "../components/UI/Loader";
import { Search } from "../components/UI/SearchComponent";

export const Country = () =>{

    const [isPending,startTransition] = useTransition();
    const [countries,setCountries] = useState([]);

    const [search,setSearch] = useState();
    const [filter,setFilter] = useState("all")


    useEffect(()=>{


        startTransition(async ()=>{
         
            const res = await getCountryData();
            // console.log(res.data)
            setCountries(res.data);
            })

    },[])

    if(isPending) return <Loader />


    function searchCountry(country){
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country
    }

    function filterRegion(country){
        if(filter==='all') return country;
        return country.region === filter;
    }

    const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country));


    return(

        <div className="country-section">

            <Search search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

          <ul className="grid grid-four-cols">
            {
                filterCountries.map((currCountry,index)=>{
                    return <CountryCard country={currCountry} key={index}/>
                }
            )
            }
            </ul>
        </div>
    )
}