import { History } from 'components';
import { PurchaseItem } from 'components/Purchases';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from 'store/slices/purchases.slice';
import 'styles/purchases.css'

const Purchases = () => {

    const purchases = useSelector(state => state.purchases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [dispatch])

    return (
        <section className='main-container purchases'>
            <History currentPage="purchases" />
            <h1>My purchases</h1>
            {
                purchases.length ?
                    (
                        <ul className='purchase-products-list'>
                            {purchases.map(purchase => (
                                <PurchaseItem purchase={purchase} key={purchase.id} />
                            ))}
                        </ul>

                    ) : (
                        <p className='no-purchases-message'>
                            You haven't bought anything yet. <Link to="/">See Products</Link>
                        </p>
                    )
            }
        </section>
    );
};

export default Purchases;