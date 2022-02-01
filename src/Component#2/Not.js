import React, { Component } from 'react';

export default class Not extends Component {

    constructor(props){
        super(props)
        this.state = {
            in_data:'',
            nd:0
        }
    }

    // componentDidUpdate(){
    //     this.setState({
    //         nd:this.props.data1
    //     })
    // }

  render() {
    return <div>
        {this.props.name}
        {this.state.in_data}
        <div className='ch'></div>

        <h1>DATA : {this.props.data1}</h1>
        <h1>nd : {this.state.nd}</h1>

    </div>;
  }
}
