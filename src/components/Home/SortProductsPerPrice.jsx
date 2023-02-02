import React from 'react'
import { useDispatch } from 'react-redux';
import { ascendingPriceProducts, descendingPriceProducts } from '../../store/slices/products.slice';
import './styles/sortProductPerPrice.css';


const SortProductsPerPrice = () => {

    const dispatch = useDispatch();

    const handleAscendingSort = () => {
        dispatch(ascendingPriceProducts())
    }

    const handleDescendingSort = () => {
        dispatch(descendingPriceProducts())
    }

  return (
    <div className='sort__buttons__container'>
        <div>Sort by price:</div>
        <button onClick={handleAscendingSort}>Ascending</button>
        <button onClick={handleDescendingSort}>Descending Order</button>
    </div>
  )
}

export default SortProductsPerPrice