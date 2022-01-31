import React, { Component } from 'react';

export default class Not extends Component {

    constructor(props){
        super(props)
        this.state = {
            in_data:'',
            nd:props.data
        }
    }

    async componentDidUpdate(pP, pS, sS){
        console.log(this.state.nd)
        if(pS.nd==this.state.nd)
        { 
            const url = 'https://www.boredapi.com/api/activity'
            const response = await fetch(url)
            const data = await response.json()
            const item = data

        // console.log(item)
        // console.log(pS)

        this.setState({
            in_data:item.activity
        })
    }
    }

  render() {
    return <div>
        {this.props.name}
        {this.state.in_data}
    </div>;
  }
}
