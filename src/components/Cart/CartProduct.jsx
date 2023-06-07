import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './cartProduct.css';
import axios from 'axios';
import loadConfiguration from '../../utils/loadConfiguration';
import { getUserCartThunk, updateQuantityThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    // const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${product.id}`
    const URL = `https://ecommerceapp-verv.onrender.com/cart/${product.id}`
    // Token Beater -> loadConfiguration
    axios.delete(URL, loadConfiguration())
      .then(response => {
        console.log(response)
        // Execute thunk
        dispatch(getUserCartThunk())
      })
      .catch(error => console.log(error))
  }
  
  
  const updateQuantity = (quantity) => {
    if(quantity - 1 >= 0) dispatch(updateQuantityThunk(product.id,  quantity  ))
  }

  // console.log('product', product.product?.productImgs?.[2]?.url);
  // console.log('product', product.product.productImgs[0].url);

  return (
    <article className='cart__product__card'>
        <div className='cart__img__container'>
          <img  className='cart__img' src={product.product?.productImgs[0]?.url} alt="" />
        </div>
        
          <div className='cart__quantity'>
            <h3 className='cart__quantity__title'>{product.product?.title}</h3>
            <div className='quantity__container'>
              <div className='quantity__icon' onClick={() => updateQuantity(product?.quantity - 1)}>-</div>
              <div className='quantity'>{product?.quantity}</div>
              <div className='quantity__icon'onClick={() => updateQuantity(product?.quantity + 1)}>+</div>
            </div>
          </div>
         <button className='cart__product__buton' onClick={handleDelete}><DeleteForeverOutlinedIcon /></button>
        
        <div className='cart__total_per__product'>
            <div>Price:</div>
            <div className='total__price'>$ {product.product?.price * product?.quantity} </div>
        </div>
    </article>
  )
}

export default CartProduct