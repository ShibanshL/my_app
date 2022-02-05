import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class C1 extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }


   async componentDidMount(){

    document.querySelector('.Hey').innerHTML='Loading' 

        const url = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX'
        const response = await fetch(url)
        const data = await response.json()
        const item = data.results

        console.log(data)
        console.log(item)

        this.setState({
            data:item
        })
    }

  render() {
    return <div className='Hey'>

        {this.state.data.queryCount}<br></br>

        {/* {this.state.data.results}<br></br> */}


    {this.state.data.map(e=>{
            return(
            <>
            T&nbsp;=&nbsp;{e.T};&nbsp;&nbsp;=&nbsp;{e.t};&nbsp;c&nbsp;=&nbsp;{e.c};&nbsp;h&nbsp;=&nbsp;{e.h};&nbsp;l&nbsp;=&nbsp;{e.l};&nbsp;n&nbsp;=&nbsp;{e.n};&nbsp;e&nbsp;=&nbsp;{e.e};&nbsp;v&nbsp;=&nbsp;{e.v};<br></br>
            </>)
        })}<br></br>


        <Link to='/New'>New</Link><br></br>
        <Link to='/Not'>Not</Link><br></br>

{/* {this.state.data.map(e=>{
    return<>
        {e.results.t}
    </>
})} */}

    </div>;
  }
}
