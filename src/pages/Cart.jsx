import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCartThunk } from '../store/slices/cart.slice'
import loadConfiguration from '../utils/loadConfiguration'
import './styles/cart.css'

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Callback - the global state that needs to be accessed (state.cart)
    const userCartProducts = useSelector(state => state.cart)

    // Call thunk
    useEffect(() => {
    dispatch(getUserCartThunk())

    }, []);

    const getTotalPrice = () => {
       let totalPrice = userCartProducts?.reduce((acc, product) => {
            return product.quantity * product.product.price + acc
        }, 0)
        return totalPrice;
    }

    const handleCheckout = () => {
        // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
        const URL = 'https://ecommerceapp-verv.onrender.com/purchases';
        const data = {
            street: "San Jose 2312",
            colony: "La Virgen",
            zipCode: 52140,
            city: "Metepec",
            references: "Something"
        }
        axios.post(URL, data, loadConfiguration() )
            .then(response => {
                console.log(response)
                // call cart information through cart thunk
                dispatch(getUserCartThunk());
                navigate('/purchases');
            })
            .catch(error => console.log('error', error));
    }

  return (
    <div className='cart__main__container'>
        <div className='cart__container'>
            <div>
                {
                    userCartProducts?.map(product => (
                        <CartProduct key={product?.id} product={product} />
                    ))
                }
            </div>
            <div className='cart__total__container'>
                <div className='cart__total__amount'>
                    <div>Total:</div>
                    <div>
                        $ { userCartProducts ? getTotalPrice() : 0 }
                    </div>
                </div>
                <button className='chechout__btn' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart