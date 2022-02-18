import React, { Component } from 'react'

export default class NC3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            info:[this.props.check]
        }
        console.log(this.state.info)
    }
  render() {
    return (
      <div>
          {this.state.info.API}

      </div>
    )
  }
}
