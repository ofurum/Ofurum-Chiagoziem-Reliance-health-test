import React, {useState} from 'react';

const SearchInput = () => {
      const InitialState = {
          search: ''
      }
      const [searchData, setSearch] = useState(InitialState);

      const updateSearch = (e) => {
          const {value} = e.target
          setSearch(value)
      }
     
      const handleSumbit = () => {
          console.log('submit')
      }

//  const pathGet = (arr1, query) => {
//   // ============== CODE GOES BELOW THIS LINE :) ==============
// }
 const a = {
         user: {
      id: 1,
     name: {
        firstName: "James",
        lastName: "Ibori"
    },
      location: {
       city: "Ikoyi",
        state: "Lagos",
       address: "One expensive house like that"
     }
   }
}


// `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
// `pathGet(a, 'James')` = "a.user.name.firstName"

      const pathGet = (arr, query) => {
             return arr.filter((obj) => {
              for (const [key, value] of Object.entries(obj)) {
                   console.log(key, value);
                 }
             })
      }
      
console.log(pathGet([a], "James"));
      const {search} = searchData
    return(
        <div className="searchInput">
             <form onSubmit = {handleSumbit}>
                 <input type="search" onChange={updateSearch} value={search} placeholder="Search" />
                 <button>
                     search
                 </button>
             </form>
        </div>
    )
}

export default SearchInput