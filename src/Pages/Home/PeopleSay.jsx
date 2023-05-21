import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';




const PeopleSay = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='px-4 md:px-16 py-12 bg-[rgb(237,210,230)]'>

            <h1 className="text-center text-3xl lg:text-6xl font-semibold">What People Say</h1>

            <h3 className="text-center text-lg lg:text-2xl font-semibold my-3">They speak their heart out</h3>

            <div className='grid md:grid-cols-2 gap-5'>
                {/* card 1 */}
                <div
                    data-aos="flip-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="card card-side bg-base-100 shadow-xl">
                    <img className='h-[200px] md:h-80 rounded-lg' src="https://cdn.shopify.com/s/files/1/3079/6066/files/img19_large.jpg?v=1613731914" alt="" />
                    <div className="p-2 pt-0 md:p-8">
                        <h2 className="text-md md:text-2xl font-semibold">Domingo Larson</h2>
                        <p className='text-sm md:text-base font-normal md:font-semibold'>Journalist</p>
                        <p className='text-[10px] md:text-sm font-thin'>May 08, 2023</p>
                        <p className='text-sm md:text-xl font-extralight md:font-light'>I love to visit ToyVerse Kids Fashion Store to anyone with a kid. They simply have amazing things we need day to day...</p>
                    </div>
                </div>
                {/* card 2 */}
                <div data-aos="flip-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="card card-side bg-base-100 shadow-xl">
                    <img className='h-[207px] md:h-80 rounded-lg' src="https://cdn.shopify.com/s/files/1/3079/6066/files/img20_large.jpg?v=1613731914" alt="" />
                    <div className="p-2 pt-0 md:p-8">
                        <h2 className="text-md md:text-2xl font-semibold">Guillermo Gregory</h2>
                        <p className='text-sm md:text-base font-normal md:font-semibold'>Designer</p>
                        <p className='text-[10px] md:text-sm font-thin'>June 16, 2023</p>
                        <p className='text-sm md:text-xl font-extralight md:font-light'>We like the fact ToyVerse Kids Fashion Store is very close to the playground. The kids just love the atmosphere at KinderLand Kids Fashion Store....!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSay;