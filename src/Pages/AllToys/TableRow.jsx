import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../AuthProvider/AuthProvider';

const TableRow = ({ toy, index }) => {
    const { user } = useContext(Authcontext);
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

    // check user logged in or not
    const handleCheckUser = () => {
        if (!user) {
            alert('You have to log in first to view details')
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} Pcs</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button onClick={handleCheckUser} className="text-secondary">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default TableRow;