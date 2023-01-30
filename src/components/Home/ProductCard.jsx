import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loadConfiguration from '../../utils/loadConfiguration';
import './styles/productCard.css';
import { getUserCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ProductsCard = ({product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  }

  // Add to cart using bearer token
  const handleCardAddBtn = (e) => {
    e.stopPropagation();
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

    const addToCartData = {
      productId: product.id,
      quantity: 1
    }

    // Uses the bearer token to have authorization to add the product to the cart
    axios.post(URL, addToCartData, loadConfiguration())
      .then(response => {
        console.log('load', response);
        dispatch(getUserCartThunk());
      })
      .catch(error => console.log('error', error))
      // console.log(product.id);
  }

  return (
    <article className='product__card' onClick={handleClick}>
      <header className='product__card__header'>
        <img className='product__card__img' src={product?.images[0].url} alt="product image" />
        <img className='product__card__img' src={product?.images[1].url} alt="product image" />
      </header>
        <section className='product__card__body'>
          <article className='product__card__upper__body'>
            <h5 className='product__card__brand'>{product?.brand}</h5>
            <p className='product__card__title'>{product?.title}</p>
          </article>
          <article className='product__card__price__container'>
            <h5 className='product__card__price__label'>Price</h5>
            <p className='product__card__price'><span>$ </span>{product.price}</p>
        </article>
        <button onClick={handleCardAddBtn} className='product__card__btn'><ShoppingCartOutlinedIcon /></button>
      </section>
    </article>
  )
}

export default ProductsCard