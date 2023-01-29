import React from 'react'
import { useSelector } from 'react-redux'

const SearchInput = () => {

    const products = useSelector(state => state.products)

    const handleChange = (e) => {
        console.log(e.target.value);
    }
  return (
    <div>
        <input className='searchInput' onChange={handleChange} type="text" />
    </div>
  )
}

export default SearchInput