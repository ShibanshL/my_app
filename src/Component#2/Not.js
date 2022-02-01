import React, { Component } from 'react';

export default class Not extends Component {

    constructor(props){
        super(props)
        this.state = {
            in_data:'',
            nd:0
        }
    }

    async componentDidUpdate(){
     

      const url ='https://www.boredapi.com/api/activity';
      const repsonse = await fetch(url);
      const data = await repsonse.json()
      const item = data

      console.log(item.activity)

      // this.setState({in_data:item})
    // }
      document.querySelector('.test').innerHTML=item.activity

    }

    // componentDidUpdate(pr,pp,ss){
    //   if(pr<pp)
    //     this.setState({
    //         nd:this.props.data1
    //     })
    // }

  render() {
    return <div>
        {/* {this.props.name} */}
        {this.state.in_data.activity}
        <div className='ch'></div>
        <div className='test'></div>
        <h1>DATA : {this.props.data1}</h1>
        <h1>nd : {()=>this.setState({nd:this.props.data1})}</h1><br></br>
        {/* <button onClick={()=>this.setState({nd:this.state.nd+1})}>ND Update</button> */}

    </div>;
  }
}
