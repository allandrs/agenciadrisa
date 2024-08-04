import React from "react";

export default function Card({titulo, img, texto}) {
    return (
        <>
            <div className="border-2 border-gray-500 w-44 h-56 rounded-lg p-3 border-blue-500 ">
                <div>
                    <img src={img} alt="logo" />
                    <h2 className="font-bold pt-4">{titulo}</h2>
                    <p>{texto}</p>
                </div>
            </div>
            
        </>
    )
}