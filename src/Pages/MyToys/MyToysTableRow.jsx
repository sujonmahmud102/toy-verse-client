import React from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const MyToysTableRow = ({ toy, index }) => {
    const { sellerName, toyName, subCategory, price, quantity } = toy;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} Pcs</td>
            <td> <button className='flex gap-4'>
                <span className='hover:bg-secondary'>
                    <FaEdit></FaEdit>
                </span>
                <span>
                    <AiFillDelete></AiFillDelete>
                </span>
            </button>
            </td>
        </tr>
    );
};

export default MyToysTableRow;