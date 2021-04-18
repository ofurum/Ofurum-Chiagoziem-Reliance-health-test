import React, {useState} from 'react';

const SearchInput = () => {
      const InitialState = {
          search: ''
      }
      cosnt [search, setSearch] = useState(InitialState);

      const updateSearch = (e) => {
          const {value} = e.target
          setSearch(value)
      }


    return(
        <div className="searchInput">
             <form onSubmi = {handleSumbit}>
                 <input type="search" onChange={updateSearch} value={search} placeholder="Search" />
             </form>
        </div>
    )
}

export default SearchInput