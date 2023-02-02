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
  console.log(product)

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
        <div className='cart__img__container'>
          <img  className='cart__img' src={product.product.images[2].url} alt="" />
        </div>
        
          <div className='cart__quantity'>
            <h3 className='cart__quantity__title'>{product.product?.title}</h3>
            <div className='quantity__container'>
              <div className='quantity__icon' onClick={handleDecrement}>-</div>
              <div className='quantity'>{quantityCart}</div>
              <div className='quantity__icon'onClick={handleIncrement}>+</div>
            </div>
          </div>
            {/* <h4>{product.product?.brand}</h4> */}
         <button className='cart__product__buton' onClick={handleDelete}><DeleteForeverOutlinedIcon /></button>
        
        <div className='cart__total_per__product'>
            <div>Price:</div>
            <div className='total__price'>$ {product.product?.price} </div>
        </div>
    </article>
  )
}

export default CartProduct