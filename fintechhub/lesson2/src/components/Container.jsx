import React from "react";
import Card from "./Card.jsx";

const movies = 
[
    {id: 1, image: "/src/assets/images/vagabond.jpg", name: "Vagabond", year: 2019, type: "HD", rate: 8.0},
    {id: 2, image: "/src/assets/images/the-marvels.jpg", name: "The Marvels", year: 2023, type: "CAM", rate: 8.0},
    {id: 3, image: "/src/assets/images/madame-web.jpg", name: "The Marvels", year: 2023, type: "CAM", rate: 8.0},
    {id: 4, image: "/src/assets/images/oppenheimer.jpg", name: "The Marvels", year: 2023, type: "CAM", rate: 8.0},
    {id: 5, image: "/src/assets/images/mean-girls.jpg", name: "The Marvels", year: 2023, type: "CAM", rate: 8.0},
    {id: 6, image: "/src/assets/images/guardians-of-the-galaxy-volume-3.jpg", name: "The Marvels", year: 2023, type: "CAM", rate: 8.0},
];

function Container() 
{
	return (
        <section className="px-7 grid grid-cols-6 gap-4">
            {movies.map(movie => 
            {
                return (
                    <Card key={movie.id} {...movie}/>    
                );
            })}
        </section>
    );
}

export default Container;
