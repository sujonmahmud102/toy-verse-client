import React, { useEffect, useState } from 'react';
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
                    {/* <Tab>Vehicles</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Trucks</Tab> */}
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
                            <div className='grid md:grid-cols-3 my-4'>
                                {
                                    vehiclesCategory.map((item, i) => <div key={i}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4'>
                                {
                                    carsCategory.map((item, i) => <div key={i}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 my-4'>
                                {
                                    trucksCategory.map((item, i) => <div key={i}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={item.photo} alt="" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.toyName}</h2>
                                                <p>${item.price} </p>
                                                <p>{item.rating} </p>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary">View Details</button>
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