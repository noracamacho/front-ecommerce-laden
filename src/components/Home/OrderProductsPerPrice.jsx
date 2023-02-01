import React from 'react'
import { useDispatch } from 'react-redux';
import './styles/orderProductsPerPrice.css'

const orderProductsPerPrice = () => {
    const dispatch = useDispatch();
    const handleAscendingOrder = () => {
        dispatch(ascendingPriceProducts())
    }

  return (
    <div className='sort__buttons__container'>
        <h5>Sort by price:</h5>
        <button onClick={handleAscendingOrder}>Ascending</button>
        <button>Descending Order</button>
    </div>
  )
}

export default orderProductsPerPrice