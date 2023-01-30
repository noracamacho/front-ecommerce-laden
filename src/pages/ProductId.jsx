
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsCard from '../components/Home/ProductCard'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import './styles/productId.css'

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [similarProducts, setSimilarProducts] = useState([]);
    const allProductsGlobal = useSelector(state => state.products);

    useEffect(() => {
        const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
        axios
        .get(URL)
        .then(response => setProduct(response.data))
        .catch(error => console.log('error', error));
    }, [id])

    useEffect(() => {
        if(allProductsGlobal && product){
            const pivot = allProductsGlobal.filter(prod => prod?.categoryId === product?.categoryId && prod?.title !== product?.title);
            setSimilarProducts(pivot);
            // console.log('similar', similarProducts);
        }
    }, [allProductsGlobal, product])

    // console.log(product);

  return (
    <div>
        <ProductDescription  product={product}/>
        <section>
            <h2>Discover similar items</h2>
            <div className="similar__products__container">
                {
                    // similarProducts depende de peticiones asincronicas por lo tanto
                    similarProducts.map(similarProduct => (
                        <ProductsCard key={similarProduct.id} product={similarProduct}/>
                    ) )
                }
            </div>
        </section>
    </div>
  )
}

export default ProductDetails