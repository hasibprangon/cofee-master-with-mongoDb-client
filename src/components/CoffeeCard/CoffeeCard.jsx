import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee;
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
                            <button className="rounded-lg p-3 bg-[#3C393B] flex justify-center items-center join-item text-white"><FaRegEdit /></button>
                            <button className="rounded-lg p-3 bg-[#EA4744] flex justify-center items-center join-item text-lg"><MdDelete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;