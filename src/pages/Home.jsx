import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CategoryFilter from '../components/Home/CategoryFilter';
import ProductCard from '../components/Home/ProductCard';
import './styles/home.css'

const Home = () => {

    const products = useSelector(state => state.products);
    const [searchedProducts, setSearchedProducts] = useState();

    useEffect(() => {
        if(products) {
            setSearchedProducts(products)
        }
    },[products])

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim();
        const inputSearch = products?.filter(prod => prod.title.toLowerCase().includes(inputValue) || prod.brand.toLowerCase().includes(inputValue) || prod.category.name.toLowerCase().includes(inputValue))
        setSearchedProducts(inputSearch)
    }
    // console.log('productsSearch', searchedProducts)

  return (
    <div>
        <input onChange={handleChange} className='searchInput' type="text" />
        <CategoryFilter />
        <div className='products__container'>
            { 
                searchedProducts?.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default Home