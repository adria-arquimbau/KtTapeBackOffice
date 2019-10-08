/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

function Search({ onSearch }) {

    const [searchValue, setSearchValue] = useState("")

    function handleSearch(event){
        event.preventDefault()
        const { target: { query: { value: query }}} = event
        onSearch(query)
        setSearchValue("")
    }

    return <form onSubmit={handleSearch}>
        <input className="navigation__search--input" placeholder="Search article" type="text" name="query" value={searchValue} onChange={event => setSearchValue(event.target.value) } />
        <button className="navigation__search--button">Search</button>
    </form>
}

export default Search