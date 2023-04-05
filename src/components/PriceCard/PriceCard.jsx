import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div>
            <h2>
                <span className='text-6xl text-bold text-purple-950'>{price.name}</span>
               
            </h2>
            <h2 className='text-4xl text-bolder'>{price.price} <span className='text-3xl'>/month</span></h2>
        </div>
    );
};

export default PriceCard;