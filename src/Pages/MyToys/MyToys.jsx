import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import MyToysTableRow from './MyToysTableRow';

const MyToys = () => {
    const { user } = useContext(Authcontext);
    useTitle('My Toys');
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/toys?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

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
                        <th>Price</th>
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
                            index={index}>  </MyToysTableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;