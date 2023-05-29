// import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> Nav -> {CHILDREN}
*/

function Nav ({ dogNames }) {

  console.log(dogNames);


  return (
    <nav>
      <ul>
        {dogNames.map((name, index) => <NavLink key={index} to={`/${name}`} >{name}</NavLink> )}
      </ul>
    </nav>
  )
}

export default Nav;