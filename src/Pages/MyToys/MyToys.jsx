import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import MyToysTableRow from './MyToysTableRow';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(Authcontext);
    useTitle('My Toys');
    const [myToys, setMyToys] = useState([]);
    const [clickAsc, setClickAsc] = useState('black')
    const [clickDesc, setClickDesc] = useState('black')


    const fetchData = async (sortOrder) => {
        try {
            const response = await axios.get(`https://toy-marketplace-a11-server.vercel.app/toys?sellerEmail=${user?.email}&sort=${sortOrder}`);
            setMyToys(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // handle sort
    const handleSort = sortOrder => {
        fetchData(sortOrder);

        // click check
        if (sortOrder === 'asc') {
            setClickDesc('black');
            setClickAsc('secondary');
        }
        else if (sortOrder === 'desc') {
            setClickAsc('black');
            setClickDesc('secondary');
        }
        else {
            setClickAsc('black');
            setClickDesc('black');
        }
    }


    return (
        <div className='px-4 lg:px-16 my-5 lg:my-10'>
            <div className='text-center my-10 text-2xl lg:text-3xl font-thin italic'>
                {
                    myToys.length ? <h3>Your Added Toys</h3> :
                        <h3>
                            Your My Toys page is empty.
                            <br />
                            <br />
                            You can add a toys on <Link className='text-secondary underline' to='/add-a-toys'>Add A Toys</Link> page.
                        </h3>
                }

            </div>

            <div className='w-full overflow-x-auto'>
                <table className="table w-full">
                    {/* head */}
                    {myToys.length !== 0 &&
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th className='flex gap-2'>Price
                                    <button onClick={() => handleSort('asc')} className={`tooltip text-${clickAsc}`} data-tip="Sort Ascending"><FaArrowDown></FaArrowDown></button>
                                    <button onClick={() => handleSort('desc')} className={`tooltip text-${clickDesc}`} data-tip="Sort Descending"><FaArrowUp></FaArrowUp>
                                    </button>
                                </th>
                                <th>Available</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    }
                    <tbody>
                        {/* table row  */}
                        {
                            myToys.map((toy, index) => <MyToysTableRow
                                key={index}
                                toy={toy}
                                myToys={myToys}
                                setMyToys={setMyToys}
                                index={index}>  </MyToysTableRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;