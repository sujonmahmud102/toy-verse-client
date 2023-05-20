import React from 'react';

const PeopleSay = () => {
    return (
        <div className='px-16 my-10'>
            <h1 className="text-center text-5xl font-semibold my-3">What People Say</h1>
            <h3 className="text-center text-2xl font-semibold my-3">They speak their heart out</h3>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/3079/6066/files/img19_large.jpg?v=1613731914" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Domingo Larson</h2>
                        <p>Journalist</p>
                        <p>May 08, 2017</p>
                        <p>I love to visit KinderLand Kids Fashion Store to anyone with a kid. They simply have amazing things we need day to day...</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/3079/6066/files/img20_large.jpg?v=1613731914" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Guillermo Gregory</h2>
                        <p>Designer</p>
                        <p>June 16, 2017</p>
                        <p>We like the fact KinderLand Kids Fashion Store is very close to the playground. The kids just love the atmosphere at KinderLand Kids Fashion Store....!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSay;