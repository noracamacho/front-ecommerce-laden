import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './cartProduct.css';
import axios from 'axios';
import loadConfiguration from '../../utils/loadConfiguration';
import { getUserCart } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${product.id}`
    // Token Beater -> loadConfiguration
    axios.delete(URL, loadConfiguration())
      .then(response => {
        console.log(response)
        // Execute thunk
        dispatch(getUserCart())
      })
      .catch(error => console.log(error))
  }


  return (
    <article className='cart__product__card'>
        <header>
            <h4>{product.product?.brand}</h4>
            <h3>{product.product?.title}</h3>
            <p></p>
        </header>
        <button onClick={handleDelete}><DeleteForeverOutlinedIcon /></button>
        <div>{product?.quantity}</div>
        <div>
            <p>Price:</p>
            <span>{product.product?.price}</span>
        </div>
    </article>
  )
}

export default CartProduct