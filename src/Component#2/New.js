import React, { useState, useEffect } from 'react';
import Info from './Info';
import Not from './Not';
import Alpha from './Alpha';
import {Link, useParams } from 'react-router-dom';
export default function New(props) {
    console.log(props)

    const [data, setData] = useState('')
    const [data1, setData1] = useState('')
    const [ndata, setNdata] = useState(0)

   const {id} = useParams()

    useEffect(async ()=>{
        const url ='https://catfact.ninja/fact'
        const response = await fetch(url)
        const data1 = await response.json()
        const item = data1

        
        console.log(item)

        // setData(dataitem)
        setData(item)
    },[ndata])

    // useEffect(async ()=>{
    //     const url1 = 'https://www.boredapi.com/api/activity'
    //     const response1 = await fetch(url1)
    //     const data1 = await response1.json()
    //     const item1 = data1

    //     console.log("Check public data"+item1)

    //     // setData1(item)
    // },[])

  return(<div>
      <br></br><br></br>
        {/* <div className='H1'>
            <h1>{props.name}</h1>
        </div>

        <div className='H2'>
            <h1>{props.name}</h1>
        </div>

        <div className='H3'>
            <h1>{props.name}</h1>
        </div> */}
        {data.fact}<br></br><br></br>
        {/* {data1.fact}<br></br> */}

        <button onClick={()=>setNdata(ndata+1)}>Increment</button>
        <h1>{ndata}</h1>
      

        <Info name='Whomi' data = {data} />

        <Not data1 = {ndata}/>

        <Alpha />
        {console.log("baluee "+ndata)}
        {/* {setTimeout(()=>{
            return(
                <Info />

            )
        },2000)} */}
        <h1>Params : {id}</h1>
        <Link to='/C1'>C1</Link><br></br>
        <Link to='/Not'>Not</Link>

        </div>)
}
