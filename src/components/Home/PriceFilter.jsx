import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const PriceFilter = ({setFilterFrom, setFilterTo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = +e.target.from.value;
        const to = +e.target.to.value;
        from ? setFilterFrom(from) : setFilterFrom(0);
        to ? setFilterTo(to) : setFilterTo(Number.POSITIVE_INFINITY);
    }
    
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
    {/* <section className='price__filter'> */}
        {/* <h2>Price</h2> */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="from">From</label>
                <input type="number" id='from' min="0"/>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="number" id='to' min="0"  />
            </div>
            <button>Filter price</button>
        </form>
    {/* </section> */}
    </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  )
}

export default PriceFilter;