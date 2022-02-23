import React, { Component } from 'react'
import './style.css'
export default class NC4_card extends Component {
  constructor(props){
    super(props)
    this.state={
      data:this.props.info
    }
  }
  render() {
    return (
      <div className='Main'>
          <div className='Sub'>
            <div className='title'>{this.state.data.API}</div>
            <div className='property'>
              <h2>Auth: {this.state.data.Auth}</h2>
              <h2>Catagories: {this.state.data.Category}</h2>
            </div>
            <div className='description'>{this.state.data.Description}</div>

          </div>
      </div>
      // <div>{this.state.data.API}</div>
    )
  }
}
