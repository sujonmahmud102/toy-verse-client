import React from 'react';

const TableRow = ({ toy, index }) => {
    const { sellerName, title, subCategory, price, quantity } = toy;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{title}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} Pcs</td>
            <td><button className='text-secondary'>View Details</button> </td>
        </tr>
    );
};

export default TableRow;