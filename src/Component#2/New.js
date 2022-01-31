import React from 'react';
import Info from './Info';
export default function New(props) {
    console.log(props)

    function j(params) {
        return(
            <h1>Inside the Function J</h1>
        )
    }


  return(<div>

        {/* <div className='H1'>
            <h1>{props.name}</h1>
        </div>

        <div className='H2'>
            <h1>{props.name}</h1>
        </div>

        <div className='H3'>
            <h1>{props.name}</h1>
        </div> */}
        {j()}
      
        </div>)
}
