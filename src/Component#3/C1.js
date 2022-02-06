import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loada from './Loada';
export default class C1 extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            Loading:(false)
        }
        this.Map = this.Map.bind(this)
    }


   async componentDidMount(){


    // document.querySelector('.Hey').innerHTML='Loading' 

        const url = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX'
        const response = await fetch(url)
        const data = await response.json()
        const item = data.results

        console.log(data)
        console.log(item)

        this.setState({
            data:item
        })
        this.setState({
            Loading:true
        })


    // document.querySelector('.Hey').innerHTML={this.state.data.map(e=>{
    //     return(
    //     <>
    //     T&nbsp;=&nbsp;{e.T};&nbsp;&nbsp;=&nbsp;{e.t};&nbsp;c&nbsp;=&nbsp;{e.c};&nbsp;h&nbsp;=&nbsp;{e.h};&nbsp;l&nbsp;=&nbsp;{e.l};&nbsp;n&nbsp;=&nbsp;{e.n};&nbsp;e&nbsp;=&nbsp;{e.e};&nbsp;v&nbsp;=&nbsp;{e.v};<br></br>
    //     </>)
    // })}<br></br> 

    }

    Map(){

        return(
        this.state.data.map((e, key)=>{
            return(
            <>
            <div key={e.v}>
            T&nbsp;=&nbsp;{e.T};&nbsp;&nbsp;=&nbsp;{e.t};&nbsp;c&nbsp;=&nbsp;{e.c};&nbsp;h&nbsp;=&nbsp;{e.h};&nbsp;l&nbsp;=&nbsp;{e.l};&nbsp;n&nbsp;=&nbsp;{e.n};&nbsp;e&nbsp;=&nbsp;{e.e};&nbsp;v&nbsp;=&nbsp;{e.v};<br></br>
            </div>
            </>)
        }))
        
    }

  render() {

    const Loading =<h1>loaada</h1>
    return <div className='Hey'>

        {this.state.data.queryCount}<br></br>

        {/* {this.state.data.results}<br></br> */}


    {/* {this.state.data.map(e=>{
            return(
            <>
            T&nbsp;=&nbsp;{e.T};&nbsp;&nbsp;=&nbsp;{e.t};&nbsp;c&nbsp;=&nbsp;{e.c};&nbsp;h&nbsp;=&nbsp;{e.h};&nbsp;l&nbsp;=&nbsp;{e.l};&nbsp;n&nbsp;=&nbsp;{e.n};&nbsp;e&nbsp;=&nbsp;{e.e};&nbsp;v&nbsp;=&nbsp;{e.v};<br></br>
            </>)
        })||Loading}<br></br> */}

<Link to='/New'>New</Link><br></br>
        <Link to='/Not'>Not</Link><br></br>

{Loading?this.Map():<Loada/>}
{/* {this.Map()} */}
        

{/* {this.state.data.map(e=>{
    return<>
        {e.results.t}
    </>
})} */}

{/* {
    if(this.state.Loading==true){
        console.log('hey')
}
else{

}


} */}

    </div>;
  }
}
