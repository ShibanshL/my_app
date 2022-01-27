import React, { Component } from 'react'
// import a from './Ani'
export default class Test extends Component {
    constructor(){
        super()
        this.state={
            name:'Shibansh Sahoo',
            data:''
        }
        // this.a = this.a.bind(this)
    }



    componentDidMount(){
         setTimeout(() => {
            document.querySelector('.test').style.background='pink'
          }, 3000);
        //   return () => clearTimeout(timer);
       
        // timer;
    }
    // setTimeout(a,2000)
    // async componentDidMount(e){
    //     const response= await fetch('https://catfact.ninja/fact')
    //     const data= await response.json()
    //     const item=data
    //     console.log("data is here",item)
    //     this.setState({
    //         data:item
    //     })
    // }

    render() {
        return (
            <div className='test'>
                this is just a check
                <br/>{this.state.name}
                
                <h1 
                style={{color:'violet',
                textDecoration:'underline'}}>
                    {/* {this.state.data.fact} */}
                </h1>
            </div>
        )
    }
}




