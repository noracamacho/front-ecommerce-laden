import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import './styles/accordionFilter.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsByCategoryIdThunk, getAllProductsThunk } from '../../store/slices/products.slice';
// import PriceFilter from './PriceFilter';

function AccordionFilter({setFilterFrom, setFilterTo, setInputSearchValue}) {

  // ! Price Filter
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = +e.target.from.value;
    const to = +e.target.to.value;
    from ? setFilterFrom(from) : setFilterFrom(0);
    to ? setFilterTo(to) : setFilterTo(Number.POSITIVE_INFINITY);
  }

  // ! Category Filter
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
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
        <form className='accordion__form' onSubmit={handleSubmit}>
            <ul>
                <li>
                  <label className='price__label' htmlFor="from">From</label>
                  <input className='price__filter__input' type="number" id='from' min="0"/>
                </li>
            </ul>
            <ul>
                <li>
                  <label className='price__label' htmlFor="to">To</label>
                  <input className='price__filter__input' type="number" id='to' min="0"  />
                </li>
            </ul>
            <button className='filter__price__btn'>Filter price</button>
        </form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li className='category__filter__id' onClick={handleAllCategories}>All products</li>
            {
                categories?.map(category => (
                    <li className='category__filter__id' onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  );
}

export default AccordionFilter;