import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsByCategoryId, getAllProducts } from '../../store/slices/products.slice'

const CategoryFilter = () => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
        axios.get(URL)
            .then(response => setCategories(response.data))
            .catch(error => console.log('error', error));
    }, [])

    const dispatch = useDispatch();

    // console.log(categories);

    const handleCategory = (id) => {
        // Execute the thunk
        dispatch(getProductsByCategoryId(id))
    }

    const handleAllCategories = () => {
        // Execute the thunk
        dispatch(getAllProducts())
    }

  return (
    <section>
        <h3>Categories</h3>
        <ul>
            <li onClick={handleAllCategories}>All products</li>
            {
                categories?.map(category => (
                    <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default CategoryFilter