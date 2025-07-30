export const Search = ({search,setSearch,filter,setFilter}) => {
  
    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleSelectChange(e){
        e.preventDefault();
        setFilter(e.target.value);
    }
    

  return(
    <section className="section-searchFilter container">
    <div>

        <input type="text" 
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="select-section"
        />

    </div>

    <div>
        <select 
         className="select-section"
         value={filter}
         onChange={handleSelectChange}>

          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          </select>
    </div>

    </section>
  )
}