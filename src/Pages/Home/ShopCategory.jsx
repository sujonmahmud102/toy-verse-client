import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {
    const [toys, setToys] = useState([]);

    console.log(toys)

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
                            {
                                toys.filter(toy => console.log(toy))
                            }
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <h2>11111111111111</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <h2>222222222222</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <h2>33333333333333</h2>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
               
               
            </Tabs>
        </div>
    );
};

export default ShopCategory;