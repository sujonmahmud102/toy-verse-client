import React, { useContext } from 'react';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const AddAToys = () => {
    const { user } = useContext(Authcontext);
    useTitle('Add A Toys')

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const newToy = { photo, toyName, sellerName, sellerEmail, subCategory, price, rating, quantity, description };


        fetch('http://localhost:5000/addAToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })


        // console.log(newToy)
    }

    return (
        <div className="m-24 bg-[#edeaed] rounded-lg p-8">
            <h3 className='text-3xl font-bold text-center mb-4'>Add New Toy</h3>
            <form onSubmit={handleAddToy}>
                {/* form first row */}
                <div className="flex justify-between gap-4">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Picture</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="photo" placeholder="Enter toy picture URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="toyName" placeholder="Enter toy name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form second row */}
                <div>
                    <div className="flex justify-between gap-4">
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Enter seller name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Enter seller email" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form third row */}
                <div>
                    <div className="flex justify-between gap-4">
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <select name="subCategory" id="" className='p-3'>
                                    <option value="Vehicles">Vehicles</option>
                                    <option value="Cars">Cars</option>
                                    <option value="Trucks">Trucks</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="price" placeholder="Enter toy price" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form fouth row */}
                <div>
                    <div className="flex justify-between gap-4">
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="number" name="quantity" placeholder="Enter toy avaialable quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form last row */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <textarea name="description" placeholder="Enter toy description" className="textarea textarea-bordered textarea-sm w-full" ></textarea>

                    </label>
                </div>
                {/* submit button */}
                <div className="text-center mt-4">
                    <input type="submit" name="" id="" value='Add Toy' className="btn w-full bg-secondary border-none" />
                </div>
            </form>
        </div>
    );
};

export default AddAToys;