import React from "react";

function Card( {image, name, year, type, rate} ) 
{
	return (
        <div className="bg-slate-800 rounded-md pb-2">

            <div>
                <img src={image} alt={name} className="rounded-md" />
            </div>

            <div className="text-white px-4 py-2">
                <div className="text-xs flex justify-start gap-3">
                    <span className="font-normal">{rate}</span>
                    <h4>{type}</h4>
                    <span>{year}</span>
                </div>

                <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                </div>

                <button className="text-base font-bold text-white mt-5 py-2 px-3 w-full rounded bg-teal-900">Watch now</button>
            </div>

        </div>
    );
}

export default Card;
