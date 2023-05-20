import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {
    const [toys, setToys] = useState([]);

    const vehiclesCategory = toys.filter(toy => toy.subCategory === 'Vehicles');
    const carsCategory = toys.filter(toy => toy.subCategory === 'Cars');
    const trucksCategory = toys.filter(toy => toy.subCategory === 'Trucks');


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='px-16 text-center'>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Shop By Category</Tab>
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
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl w-72 h-64" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button className="btn btn-secondary">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        {/* tab2 category */}
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4 gap-5'>
                                {
                                    carsCategory.map((item, i) => <div key={i}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl w-72 h-64" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button className="btn btn-secondary">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        {/* tab3 category */}
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4 gap-5'>
                                {
                                    trucksCategory.map((item, i) => <div key={i}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl w-72 h-64" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <Link to={`/toy/${item._id}`}>
                                                        <button className="btn btn-secondary">View Details</button>
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