import React from "react";


function DogCard({ dog }) {
    const imagePath = process.env.PUBLIC_URL + '/' + dog.src + '.jpg';

    return (
        <div className="DogCard">
            <img src={imagePath}></img>
            <h3>{dog.name}</h3>
            <h4>{dog.age}</h4>
            <div>
                {dog.facts.map((f, index) => <p key={index}>{f}</p>)}
            </div>
        </div>
    )
}

export default DogCard;
