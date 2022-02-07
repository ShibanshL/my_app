// import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import React from 'react';

export default function D1() {
    const { name } = useParams()
    const nav = useNavigate()
  return <div>
      Just some randome stuff - {name}

      <button onClick={()=>{
        nav('/C1')
      }}>CLick to go to C1</button>
  </div>;
}

