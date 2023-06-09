import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(Authcontext);


    // check user logged in or not
    const handleCheckUser = () => {
        if (!user) {
            alert('You have to log in first to view details')
        }
    }

    const vehiclesCategory = toys.filter(toy => toy.subCategory === 'Vehicles');
    const carsCategory = toys.filter(toy => toy.subCategory === 'Cars');
    const trucksCategory = toys.filter(toy => toy.subCategory === 'Trucks');


    useEffect(() => {
        fetch('https://toy-marketplace-a11-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='px-4 py-8 md:px-16 text-center bg-[#acb0c0]'>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab><h3 className='text-3xl md:text-6xl font-semibold rounded-lg p-2 md:p-4'>Shop By Category</h3></Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Vehicles</Tab>
                            <Tab>Cars</Tab>
                            <Tab>Trucks</Tab>
                        </TabList>
                        {/* tab1 category */}
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4 gap-5'>
                                {
                                    vehiclesCategory.map((item, i) => <div key={i}>
                                        <div
                                            data-aos="zoom-in"
                                            className="mx-auto card w-80 md:w-96 h-[400px] md:h-[450px] bg-base-100 border border-pink-100 shadow-xl">
                                            <img src={item.photo} alt="" className="rounded-lg w-[230px] h-[200px] pt-8 mx-auto" />
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>Price: ${item.price} </p>
                                                <p>Ratings: {item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button onClick={handleCheckUser} className="md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        {/* tab2 category  */}
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4 gap-5'>
                                {
                                    carsCategory.map((item, i) => <div key={i}>
                                        <div
                                            data-aos="zoom-in"
                                            className="mx-auto card w-80 md:w-96 h-[400px] md:h-[450px] bg-base-100 border border-pink-100 shadow-xl">
                                            <img src={item.photo} alt="" className="rounded-lg w-[230px] h-[200px] pt-8 mx-auto" />
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>Price: ${item.price} </p>
                                                <p>Ratings: {item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button onClick={handleCheckUser} className="md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        {/* tab3 category  */}
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4 gap-5'>
                                {
                                    trucksCategory.map((item, i) => <div key={i}>
                                        <div
                                            data-aos="zoom-in"
                                            className="mx-auto card w-80 md:w-96 h-[400px] md:h-[450px] bg-base-100 border border-pink-100 shadow-xl">
                                            <img src={item.photo} alt="" className="rounded-lg w-[230px] h-[200px] pt-8 mx-auto" />
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>Price: ${item.price} </p>
                                                <p>Ratings: {item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button onClick={handleCheckUser} className="md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default ShopCategory;