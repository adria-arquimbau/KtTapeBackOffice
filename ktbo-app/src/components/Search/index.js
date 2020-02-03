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

    return <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" placeholder="Search article" aria-label="Search" name="query" value={searchValue} onChange={event => setSearchValue(event.target.value) }></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
}

export default Search