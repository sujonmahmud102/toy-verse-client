import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import useTitle from '../../hooks/useTitle';
import { AiOutlineSearch } from 'react-icons/ai';

const AllToys = () => {
    const toys = useLoaderData();
    useTitle('All Toys');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = event => {
        setSearchQuery(event.target.value)
    }

    const filteredItems = toys.filter((item) =>
        item.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <div className='p-4 lg:p-16'>
            <div className='flex justify-center mb-8'>
                <div className="relative w-3/4 md:w-2/5">
                    <input onChange={handleSearch} value={searchQuery} type="text" placeholder="Search by toy name" className="input input-bordered input-secondary w-full pl-8" />
                    <div className='absolute top-[14px] left-2 text-2xl text-gray-400'>
                        <AiOutlineSearch></AiOutlineSearch>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-auto">
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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table row  */}
                        {
                            filteredItems.map((toy, index) => <TableRow
                                key={index}
                                toy={toy}
                                index={index}>  </TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;