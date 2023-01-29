import { lightGreen } from '@mui/material/colors'
import React from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { getUserCart } from '../store/slices/cart.slice';
import CartProduct from '../components/Cart/CartProduct'

const Cart = () => {

    // Callback - the global state that needs to be accessed (state.cart)
    const userCartProducts = useSelector(state => state.cart)
    // console.log('cart', userCartProducts)

    // const dispatch = useDispatch();

    const getTotalPrice = () => {
        // console.log('userCartProducts', userCartProducts)
       let totalPrice = userCartProducts?.reduce((acc, product) => {
            return product.quantity * product.product.price + acc
        }, 0)
        // console.log('total', totalPrice);
        return totalPrice;
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
                { userCartProducts ? 
                        getTotalPrice()
                        // userCartProducts?.reduce((acc, product) => {
                        //     return product.quantity * product.product.price + acc
                        // }, 0) 
                    : 
                        0 
                }
            </p>
            <button>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart