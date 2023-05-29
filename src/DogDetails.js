import React from "react";
import { useParams } from "react-router-dom";
import DogCard from "./DogCard";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> DogDetails -> {CHILDREN}
 */

function DogDetails({ dogs }) {
  const params = useParams();
  const [dog] = dogs.filter((dog) => dog.name === params.name);


  return (
    <DogCard dog={dog}/>
  );
}

export default DogDetails;
