import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ toy, index }) => {

    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} Pcs</td>
            <td><Link to={`/toy/${_id}`}>
                <button className='text-secondary'>View Details</button></Link>
            </td>
        </tr>
    );
};

export default TableRow;