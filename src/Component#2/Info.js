import React from 'react';
// import New from './New';
export default function Info(props) {
  return( <div>
        {/* <div className='H1'>
            <h1>Shibansh Sahoo</h1>
        </div> */}

       <h1>Yo hi {props.name}</h1>

       <br></br>

       <h1>{props.data.fact}</h1>
        {/* <div className='H2'>
            <h1>Abhishek V Bharadwaj</h1>
        </div> */}


        {/* <div className='H3'>
            <h1>Ritesh Das</h1>
        </div> */}



  </div>);
}
