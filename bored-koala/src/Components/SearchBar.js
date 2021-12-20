import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ placeholder, data }) => {
  return (
    <div className='SearchBar'>
      <div className='SerachInput'>
        <input type='text' placeholder={placeholder} />
        <div className='searchIcon'>
          <SearchIcon />
        </div>
      </div>
      <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar
