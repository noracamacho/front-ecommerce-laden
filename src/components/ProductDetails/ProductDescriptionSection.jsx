import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import loadConfiguration from "../../utils/loadConfiguration";
import axios from 'axios';
import { getUserCart } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

// import productsSlice from '../../store/slices/products.slice'

// ? Como la info viene de una petición asincronica se debe usar el encadenamieto opcional
const ProductDescription = ({product}) => {
    // console.log('product', product);

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
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';
        const data = {
            quantity: quantity,
            productId: product.id
        }
        axios.post(URL, data, loadConfiguration())
            .then(response => {
                // console.log(response)
                // Execute thunk
                dispatch(getUserCart())
            })
            .catch(error => console.log('error', error))
    }

  return (
    <article>
        <h4>{product?.brand}</h4>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <section>
            <span>Price</span>
            <h3>{product?.price}</h3>
        </section>
        <section>
            <h3>Quantity</h3>
            <div>
                <div onClick={handleDecrement}>-</div>
                <div>{quantity}</div>
                <div onClick={handleIncrement}>+</div>
            </div>
        </section>
        <button onClick={handleAddButton}>Add to cart <ShoppingCartOutlinedIcon /></button>
    </article>
  )
}

export default ProductDescription