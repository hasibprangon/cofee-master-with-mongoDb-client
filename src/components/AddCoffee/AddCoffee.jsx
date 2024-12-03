import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        // send data to the server
        fetch('https://coffee-store-server-87ppp4pp1-hasib1510s-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };


    return (
        <div className='flex justify-center items-center mt-10 '>
            <div className="card bg-[#F4F3F0] w-full max-w-2xl shrink-0 shadow-2xl">
            <h2 className='text-3xl font-semibold text-center mt-5'>Add Your Coffee Today</h2>
                <form onSubmit={handleAddCoffee} className="card-body">
                    <div className='grid grid-cols-2 gap-3'>
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        {/* quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Enter Coffee Quantity" className="input input-bordered" required />
                        </div>
                        {/* Supplier */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="Enter Coffee supplier" className="input input-bordered" required />
                        </div>
                        {/* taste */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered" required />
                        </div>
                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        {/* Details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;