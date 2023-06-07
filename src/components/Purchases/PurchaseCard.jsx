import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {

    const navigate = useNavigate();   
    const purchaseDate = new Date(purchase?.createdAt)
    // const options = {year: 'numeric', month: 'long', day: 'numeric' };

    const handleClick = () => {
        navigate(`/product/${purchase.product.id}`);
      } 

  return (
    <div className='purchases__main__container' onClick={handleClick}>
        {/* <h3>{purchaseDate.toLocaleDateString('en-US', options)}</h3> */}
            <ul className='purchases__item__container'>
                {
                   <li className='purchase__item'>
                    <div className='image'>
                        <img src={purchase?.product.productImgs[2].url} alt="product image" style={{height:'4rem', width:'auto'}} />
                    </div>
                        <div className='name'>{purchase?.product.title}</div>
                        <div className='date'>{purchaseDate.toLocaleDateString()}</div>
                        <div className='quantity'>{purchase.quantity}</div>
                        <div className='price'>$ {purchase?.product.price * purchase?.quantity}</div>
                    </li> 
                }

            </ul>
    </div>
  )
}

export default PurchaseCard