import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NC2.css'
import NC3 from './NC3'
export default class NC2 extends Component {
   
    constructor(){
        super()
        this.state ={
            data:[],
            check:[]
        }
        this.fetchRequest = this.fetchRequest.bind(this)
    }

    // handleClick(){
    //  const nav = NavLink()
    //  nav('/NC3/'+this.state.check+'/')
    // }

    async fetchRequest(){
        const url = 'https://random.dog/woof.json'
        const res = await fetch(url)
        const data = await res.json()

        // console.log('data '+data)
        this.setState({check:data})

        console.log(this.state.check)

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

       this.fetchRequest()
        // console.log(this.state.check+'hi')
    }
  render() {
    //   console.log(this.state.data)
    return (
      <div>NC2<br/><hr/>
      <h3>
          <img src={this.state.check.url} />
          {/* {this.state.check} */}
      </h3>

      <h2 className='Try'>
          {this.state.data.map(e =>{
              return(
                  <div className='Try2'>
                      {e.Link}    

                      <NC3 check={this.state.check}   />           
                  </div>
              )
          })}
      </h2>
      </div>
    )
  }
}
