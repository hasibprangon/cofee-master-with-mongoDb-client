import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Delete Confirmed');

                fetch(`https://coffee-store-server-87ppp4pp1-hasib1510s-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })


            }
        });
    }
    return (
        <div>
            <div className="card card-side  bg-[#f1ead4] shadow-xl">
                <figure>
                    <img
                        src={photo} className='w-48 h-32' />

                </figure>
                <div className="flex justify-around items-center w-full p-8">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical gap-2">
                            <button className="rounded-lg p-3 bg-[#D2B48C] flex justify-center items-center join-item"><FaEye /></button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="rounded-lg p-3 bg-[#3C393B] flex justify-center items-center join-item text-white"><FaRegEdit /></button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="rounded-lg p-3 bg-[#EA4744] flex justify-center items-center join-item text-lg"><MdDelete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;