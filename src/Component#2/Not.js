import React, { Component } from 'react';

export default class Not extends Component {

    constructor(props){
        super(props)
        this.state = {
            in_data:'',
            nd:props.data1
        }
    }

    async componentDidUpdate(pP, pS, sS){
        console.log('check '+this.state.nd)

        document.querySelector('.ch').innerHTML = this.state.nd
        // if(this.props.data1<pP)
        // { 
        //     const url = 'https://www.boredapi.com/api/activity'
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     const item = data

        // // console.log(item)
        // // console.log(pS)

        // this.setState({
        //     in_data:item.activity
        // })
    // }
    }

  render() {
    return <div>
        {this.props.name}
        {this.state.in_data}
        <div className='ch'></div>
    </div>;
  }
}
