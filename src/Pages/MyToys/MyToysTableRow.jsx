import React from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysTableRow = ({ toy, myToys, setMyToys, index }) => {
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

    // console.log(myToys)
    const handleDeleteItem = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-a11-server.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            );
                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining);
                        };
                    })
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} Pcs</td>
            <td> <button className='flex gap-4'>
                <span className="tooltip" data-tip="Update Toy Info">
                    <Link to={`/updateToy/${_id}`}><FaEdit></FaEdit></Link>
                </span>
                <span onClick={() => handleDeleteItem(_id)} className="tooltip tooltip-secondary text-red-500" data-tip="Remove Toy">
                    <AiFillDelete></AiFillDelete>
                </span>
            </button>
            </td>
        </tr>
    );
};

export default MyToysTableRow;