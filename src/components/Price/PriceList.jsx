import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))

    }, [])

    return (
        <div>
            <h2 className='text-5xl text-center text-purple-600 font-bold mt-4 hover:text-green-700'>Affordable Prices</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;