import React from "react";
import DogCard from "./DogCard";

function DogList({ dogs }) {

    console.log('DogList dogs =>', dogs);
    return (
        <div>
            {dogs.map((d, index) => <DogCard key={index} dog={d}/>)}
        </div>
    )
}

export default DogList;