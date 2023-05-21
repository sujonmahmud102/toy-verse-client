import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { _id, photo, sellerName, sellerEmail, rating, toyName, subCategory, price, quantity, description } = toy;
    useTitle(`Toy Details for ${toyName}`)

    return (
        <div className='px-4 md:px-16 py-10 bg-base-200'>
            <div className="lg:flex border border-pink-200 rounded-2xl p-5 lg:p-10 shadow-xl">
                <img className='w-[300px] h-[250px] lg:w-[600px] lg:h-[500px] mr-4 lg:mr-8 rounded-lg' src={photo} alt="" />
                {/* product info */}
                <div className="leading-7 ml-5 lg:ml-10">
                    <h2 className="text-2xl lg:text-5xl font-bold mb-2 lg:mb-4">{toyName}</h2>
                    <p>Ratings: {rating}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {quantity}</p>
                    <div className='mt-5'> <h3 className='text-xl lg:text-2xl font-semibold'>Description:</h3>
                        <p>{description}</p>
                    </div>
                    {/* seller info */}
                    <div className='leading-7 mt-5 lg:mt-10'>
                        <h3 className='text-xl lg:text-2xl font-semibold'>Seller Information:</h3>
                        <p className='text-sm lg:text-md font-medium'>Name: {sellerName}</p>
                        <p className='text-sm lg:text-md font-medium'>Email: {sellerEmail}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;