import React, { Component } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import './NC2.css'
import NC4_card from './NC4_cards'
// import NC3 from './NC3'
export default class NC2 extends Component {
   
    constructor(){
        super()
        this.state ={
            data:[],
            check:[]
        }
    }

  
    async componentDidMount(){
        const url = 'https://api.publicapis.org/entries'
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        this.setState({data:data.entries})

    }
  render() {
    return (
      <div>
          {this.state.data.map(e =>{
              return(
                  <>
                    <NC4_card info={e} />
                  </>
              )
          })}

      </div>
    )
  }
}
