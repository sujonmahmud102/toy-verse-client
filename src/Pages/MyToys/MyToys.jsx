import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import MyToysTableRow from './MyToysTableRow';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from 'axios';

const MyToys = () => {
    const { user } = useContext(Authcontext);
    useTitle('My Toys');
    const [myToys, setMyToys] = useState([]);

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
    }


    return (
        <div className='px-16 my-10'>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th className='flex gap-2'>Price <button onClick={() => handleSort('asc')} className='tooltip' data-tip="Sort Ascending"><FaArrowDown></FaArrowDown></button> <button onClick={() => handleSort('desc')} className='tooltip' data-tip="Sort Descending"><FaArrowUp></FaArrowUp></button></th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
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
    );
};

export default MyToys;