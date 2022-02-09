// import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';

export default function D1() {

    const { name } = useParams()
    // const [na, setNa] = useState()

    // setNa(name)
    const nav = useNavigate()
  return <div>
      Just some randome stuff - {name}

      <button onClick={()=>{
        nav('/New'+'/'+name)
      }}>CLick to go to C1</button>
  </div>;
}

