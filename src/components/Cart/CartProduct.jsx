import React, { useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './cartProduct.css';
import axios from 'axios';
import loadConfiguration from '../../utils/loadConfiguration';
import { getUserCartThunk } from '../../store/slices/cart.slice';
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
        dispatch(getUserCartThunk())
      })
      .catch(error => console.log(error))
  }

  const [quantityCart, setQuantityCart] = useState(product?.quantity);

    const handleIncrement = () => {
        setQuantityCart(quantityCart + 1);
    }
    const handleDecrement = () => {
        if(quantityCart - 1 > 0){
            setQuantityCart(quantityCart - 1);
        }
    }

  return (
    <article className='cart__product__card'>
        <header>
            <h4>{product.product?.brand}</h4>
            <h3>{product.product?.title}</h3>
            <p></p>
        </header>
        <button onClick={handleDelete}><DeleteForeverOutlinedIcon /></button>
        <div className='quantity__container'>
          <div className='quantity__icon' onClick={handleDecrement}>-</div>

          <div>{quantityCart}</div>
          <div className='quantity__icon'onClick={handleIncrement}>+</div>

        </div>
        <div>
            <p>Price:</p>
            <span>{product.product?.price}</span>
        </div>
    </article>
  )
}

export default CartProduct