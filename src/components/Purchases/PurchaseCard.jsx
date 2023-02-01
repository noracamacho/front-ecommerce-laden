import React from 'react'

const PurchaseCard = ({purchase}) => {


    
    console.log(purchase);
    const purchaseDate = new Date(purchase?.createdAt)
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
        <h3>{purchaseDate.toLocaleDateString('en-US', options)}</h3>
        <div>
            <ul>
                {
                   <li>
                        <img src={purchase?.product.images[0].url} alt="product image" style={{height:'4rem', width:'auto'}} />
                        <h4>{purchase?.product.title}</h4>
                        <div>{purchase.quantity}</div>
                        <div>$ {purchase?.product.price * purchase?.quantity}</div>
                    </li> 
                }

            </ul>
        </div>
    </div>
  )
}

export default PurchaseCard