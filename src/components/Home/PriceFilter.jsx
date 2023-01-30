import React, { useState} from 'react'

const PriceFilter = ({setFilterFrom, setFilterTo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = +e.target.from.value;
        const to = +e.target.to.value;
        from ? setFilterFrom(from) : setFilterFrom(0);
        to ? setFilterTo(to) : setFilterTo(Number.POSITIVE_INFINITY);
    }
    const min = 0;

    const [value, setValue] = useState('');

    // const handleChange = event => {
    //     const value = Math.max(min, Number(event.target.value));
    //     setValue(value);
    // };

  return (
    <section>
        <h2>Price</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="from">From</label>
                <input type="number" id='from' min="0"/>
                {/* <input type="number" min="0" onInput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"></input> */}
                {/* <input type="number" id='from' min="0" value={value} onChange={handleChange}/> */}
                {/* <input d='from' type="number" min="0" onInput={'value = Math.abs(value)'}></input> */}
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="number" id='to' min="0"  />
            </div>
            <button>Filter price</button>
        </form>
    </section>
  )
}

export default PriceFilter