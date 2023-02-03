import React, { useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './cartProduct.css';
import axios from 'axios';
import loadConfiguration from '../../utils/loadConfiguration';
import { getUserCartThunk, updateQuantityThunk } from '../../store/slices/cart.slice';
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
  // console.log(product)

  // const [quantityCart, setQuantityCart] = useState(product?.quantity);
  
  // const updateCartNumber = {
  //   quantity: quantityCart
  // }
  
  // const handleIncrement = () => {
  //   setQuantityCart(quantityCart + 1);
  //   console.log('qc', quantityCart)
  //   updateQuantity(updateCartNumber)
  // }
  // const handleDecrement = () => {
  //   if(quantityCart - 1 >= 0){
  //     setQuantityCart(quantityCart - 1);
  //     updateQuantity(updateCartNumber);
  //   }
  // }
  
  
  const updateQuantity = (quantity) => {
    if(quantity - 1 >= 0) dispatch(updateQuantityThunk(product.id,  quantity  ))
    // console.log('updateq', product)
  }
  // console.log('1', quantityCart)
  // console.log(updateCartNumber, 'updateCartNumber')


  return (
    <article className='cart__product__card'>
        <div className='cart__img__container'>
          <img  className='cart__img' src={product.product.images[2].url} alt="" />
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