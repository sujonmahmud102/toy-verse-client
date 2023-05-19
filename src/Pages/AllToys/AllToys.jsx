import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className='p-16'>
            <div className='flex justify-center mb-8'>
                <div className="form-control mx-auto">
                    <div className="input-group">
                        <input type="text" placeholder="Search by toy name" className="input input-bordered" />
                        <button className="btn btn-secondary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
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
                            toys.map((toy, index) => <TableRow
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