import React, { Component } from 'react';

export default class C1 extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }


   async componentDidMount(){
        const url = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX'
        const response = await fetch(url)
        const data = await response.json()
        const item = data.results

        console.log(item)

        this.setState({
            data:item
        })
    }

  render() {
    return <div>hi

        {this.state.data.queryCount}<br></br>

        {/* {this.state.data.results}<br></br> */}


    T = {this.state.data.map(e=>{
            return(
            <>
            {e.T}
            </>)
        })}<br></br>

{/* {this.state.data.map(e=>{
    return<>
        {e.results.t}
    </>
})} */}

    </div>;
  }
}
