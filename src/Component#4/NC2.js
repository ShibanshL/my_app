import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NC2.css'
export default class NC2 extends Component {
    constructor(){
        super()
        this.state ={
            data:[],
            check:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log('ok')
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

        this.setState({check:data.entries[0]})
    }
  render() {
      console.log(this.state.data)
    return (
      <div>NC2<br/><hr/>
      <h3>
          {this.state.check.API}
      </h3>

      <h2 className='Try'>
          {this.state.data.map(e =>{
              return(
                  <div onClick={this.handleClick()} className='Try2'>
                      <Link to='/NC3/'>{e.Link}</Link>                  
                  </div>
              )
          })}
      </h2>
      </div>
    )
  }
}
