import React, { Component } from 'react';

export default class C1 extends Component {
    constructor(){
        super()
        this.state = {
            data:''
        }
    }


    componentDidMount(){
        const url = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX'
        const response = await fetch(url)
        const data = await response.json()
        const item = data

        console.log("I = "+item)
    }

  render() {
    return <div>hi</div>;
  }
}
