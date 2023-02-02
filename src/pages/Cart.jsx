import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCartThunk } from '../store/slices/cart.slice'
import loadConfiguration from '../utils/loadConfiguration'


const Cart = () => {

    const dispatch = useDispatch();
    // Callback - the global state that needs to be accessed (state.cart)
    const userCartProducts = useSelector(state => state.cart)

    const getTotalPrice = () => {
       let totalPrice = userCartProducts?.reduce((acc, product) => {
            return product.quantity * product.product.price + acc
        }, 0)
        return totalPrice;
    }

    const handleCheckout = () => {
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
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
            })
            .catch(error => console.log('error', error));
    }

  return (
    <section>
        <div>
            {
                userCartProducts?.map(product => (
                    <CartProduct key={product?.id} product={product} />
                ))
            }
        </div>
        <footer>
            <div>Total:</div>
            <p>
                { userCartProducts ? getTotalPrice() : 0 }
            </p>
            <button className='chechout__btn' onClick={handleCheckout}>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart