import React from 'react';
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {


    
    console.log(purchase);
    const purchaseDate = new Date(purchase?.createdAt)
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className='purchases__main__container'>
        {/* <h3>{purchaseDate.toLocaleDateString('en-US', options)}</h3> */}
            <ul className='purchases__item__container'>
                {
                   <li className='purchase__item'>
                    <div className='image'>
                        <img src={purchase?.product.images[0].url} alt="product image" style={{height:'4rem', width:'auto'}} />
                    </div>
                        <div className='name'>{purchase?.product.title}</div>
                        <div>{purchaseDate.toLocaleDateString('en-US', options)}</div>
                        <div className='quantity'>{purchase.quantity}</div>
                        <div className='price'>$ {purchase?.product.price * purchase?.quantity}</div>
                    </li> 
                }

            </ul>
    </div>
  )
}

export default PurchaseCard