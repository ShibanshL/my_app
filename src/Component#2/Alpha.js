import React, { useState,useEffect } from 'react';

export default function Alpha() {
    const [data, setData] = useState({"posts" : [
        {
          " name " : " Shibansh Sahoo ",
          " email " : " sonu@gmail.com ",
          " price " : " 457 ",
          " materials ": " Actually i'm gonna have a limit ",
          " paid ": true ,
          " unpaid ": false ,
          " id ": 3
        } ,
        {
          " name ": " Pratichi Sahoo ",
          " email ": " pratichi10@gmail.com ",
          " price ": " 26 ",
          " materials ": " " ,
          " paid ": "" ,
          " unpaid ": true ,
          " id ": 4
        } 
    ]
    })



    // useEffect(async ()=>{
    //     // const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=39U5VQSINVHVLGFH'
    //     // const url = 'https://api.polygon.io/v1/meta/symbols/AAPL/company?apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX'
    //     const url = './p.json'
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     const item = data

    //     // console.log('Alpha vantage data'+item)
    //     setData(item)
        
    // },[])

    // console.log(data)
  return <div>NN
     {/* {data.map(e => {
         return <>
         {e.posts.name}
         </>
     })} */}

     {data.posts.map(e=>{return <>{e.name}</>})}
  </div>;
}
