import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from 'react-redux';
import { getProductsByCategoryIdThunk, getAllProductsThunk } from '../../store/slices/products.slice';
import './styles/categoryFilter.css'

const CategoryFilter = ({setInputSearchValue}) => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
        const URL = 'https://ecommerceapp-verv.onrender.com/categories';
        axios.get(URL)
            .then(response => setCategories(response.data))
            .catch(error => console.log('error', error));
    }, [])

    const dispatch = useDispatch();

    const handleCategory = (id) => {
        // Execute the thunk
        dispatch(getProductsByCategoryIdThunk(id));
        setInputSearchValue('');
    }

    const handleAllCategories = () => {
        // Execute the thunk
        dispatch(getAllProductsThunk());
        setInputSearchValue('');
    }

  return (
    <section className='accordion__filter'>
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categories</Accordion.Header>
        <Accordion.Body>
    {/* <section> */}
        {/* <h3>Categories</h3> */}
        <ul>
            <li className='categogy__filter__id' onClick={handleAllCategories}>All products</li>
            {
                categories?.map(category => (
                    <li className='categogy__filter__id' onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    {/* </section> */}
    </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  )
}

export default CategoryFilter