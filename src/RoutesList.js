import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";


function RoutesList({ dogs }) {

    console.log('RoutesList.js dogs', dogs);

    return (
        <Routes>
            <Route element={<DogList dogs={dogs}/>} path="/" />
            {/* <Route element={<DogDetails />} path="/dogs/:name" /> */}
        </Routes>
    )

}

export default RoutesList;