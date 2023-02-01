import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard';
import loadConfiguration from '../utils/loadConfiguration';

const Purchases = () => {

  const [usersPurchases, setUsersPurchases] = useState([]);

  useEffect(() => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
      axios.get(URL, loadConfiguration())
        .then(response => {
          console.log(response)
          setUsersPurchases(response?.data);
        })
        .catch(error => console.log('error', error))
  },[])

  console.log(usersPurchases);


  return (
    <div>
      <h2>Purchases</h2>
      <div className='purchases__container'>
        {
          usersPurchases?.map(purchase => (
            <PurchaseCard 
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases