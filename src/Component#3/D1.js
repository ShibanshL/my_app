// import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react';

export default function D1() {
    const { name } = useParams
  return <div>
      Just some randome stuff - {name}
  </div>;
}

