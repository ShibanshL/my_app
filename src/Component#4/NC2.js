import React, { Component } from 'react'
import './NC2.css'
export default class NC2 extends Component {
    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    async componentDidMount(){
        // fetch('https://api.publicapis.org/entries')
        // .this(res => res.json())
        // .this(data => this.setState({data:data}))

        const url = 'https://api.publicapis.org/entries'
        const res = await fetch(url)
        const data = await res.json()

        // console.log(data)
        this.setState({data:data.entries})
    }
  render() {
      console.log(this.state.data)
    return (
      <div>NC2<br/><hr/>

      <h2 className='Try'>
          {this.state.data.map(e =>{
              return(
                  <div className='Try2'>
                  {e.Link}
                  </div>
              )
          })}
      </h2>
      </div>
    )
  }
}
