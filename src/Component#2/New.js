import React, { useState, useEffect } from 'react';
// import Info from './Info';
export default function New(props) {
    console.log(props)

    const [data, setData] = useState('')

    // async function j(params) {

    //     const url ='https://catfact.ninja/fact'
    //     const response = await fetch(url)
    //     const data1 = await response.json()
    //     const item = data1

        
    //     console.log(item)

    //     // setData(dataitem)
    //     setData(item)
        
    // }
    // j()
    // setData({
    //     data=j().item
    // })

    useEffect(async ()=>{
        const url ='https://catfact.ninja/fact'
        const response = await fetch(url)
        const data1 = await response.json()
        const item = data1

        
        console.log(item)

        // setData(dataitem)
        setData(item)
    },[])

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
        {data.fact}
      
        </div>)
}
