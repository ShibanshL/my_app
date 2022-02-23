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
            cPage:1,
            pPage:10,
            pageData:[]
        }
        this.pagenm = this.pagenm.bind(this)
    }

    pagenm(){
        const ilPage= this.state.cPage*this.state.pPage
        const ifPage = ilPage - this.state.pPage
        const currentPost = this.state.data.slice(ifPage, ilPage)
        this.setState({
            pageData:currentPost
        })
  
        console.log(this.state.pageData)
    }

    async componentDidMount(){
        const url = 'https://api.publicapis.org/entries'
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        this.setState({data:data.entries})
        this.pagenm()
    }
    
    
    
  render() {
     
    //   console.log(currentPost)
    return (
      <div>
          {this.state.pageData.map(e =>{
              return(
                  <>
                    <NC4_card info={e} />
                  </>
              )
          })}

          {/* <NC4_card info={this.state.pageData} /> */}

      </div>
    )
  }
}
