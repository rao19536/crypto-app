import React from 'react'
import * as Style from './style'

const SearchComponent = ({placeholder, handleSearch}) => {
    const handleChange = (e) =>{
        const {value} = e.target
        handleSearch(value)
    }
  return (
    <Style.StyledSearchInput
        placeholder={placeholder}
        onChange={handleChange}
    />
  )
}
export default SearchComponent
