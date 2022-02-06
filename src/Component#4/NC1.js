import React, { Component } from 'react';
import Loada from '../Component#3/Loada';
import { Link } from 'react-router-dom';
export default class NC1 extends Component {

    constructor(){
        super()
        this.state = {
            data:'',
            Loading:false
        }
        this.Load = this.Load.bind(this);
    }

    

     componentDidMount(){
        setTimeout(async ()=>{
            const url = 'https://catfact.ninja/fact'
            const response = await fetch(url)
            const info = await response.json()
            const item = info
    
            this.setState({
                data:item
            })
            this.setState({
                Loading:true
            })
        },2000)
        
    }

    
    Load(){
        return(
            <>
            <h1>Loading</h1>
            </>
        )
    }
  render() {
    return <div>
        {this.state.Loading?this.state.data.fact:<Loada />}<br></br>
            <Link to='/New'>New</Link><br></br>
            <Link to='/Not'>Not</Link><br></br>
            <Link to='/C1'>C1</Link><br></br>

    </div>;
  }
}
