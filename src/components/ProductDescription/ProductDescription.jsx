import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import loadConfiguration from "../../utils/loadConfiguration";
import axios from 'axios';
import { getUserCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import './productDescription.css';

// ? Como la info viene de una petición asincronica se debe usar el encadenamieto opcional
const ProductDescription = ({product}) => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleDecrement = () => {
        if(quantity - 1 > 0){
            setQuantity(quantity - 1);
        }
    }

    const dispatch = useDispatch()

    const handleAddButton = () => {
        console.log('product', product.id);
        // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';
        const URL = 'https://ecommerceapp-verv.onrender.com/cart';

        const data = {
            quantity: quantity,
            productId: product.id
        }
        axios.post(URL, data, loadConfiguration())
            .then(response => {
                // Execute thunk
                dispatch(getUserCartThunk())
            })
            .catch(error => console.log('error', error))
    }

  return (
    <div className='product__description__detail__container'>

    
    <div className='product__description'>
        <h4>{product?.brand}</h4>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <div className='price__quantity__section'>
            <div>
                <h5>Price</h5>
                <h3>$ {product?.price}</h3>
            </div>
            <div>
                <h5>Quantity</h5>
                <div className='quantity__container'>
                    <div className='quantity__icon' onClick={handleDecrement}>-</div>
                    <div className='quantity__number'>{quantity}</div>
                    <div className='quantity__icon'onClick={handleIncrement}>+</div>
                </div>
            </div>
        </div>
        <button className='product__description__btn' onClick={handleAddButton}>Add to cart <ShoppingCartOutlinedIcon /></button>
    </div>
    </div>
  )
}

export default ProductDescription