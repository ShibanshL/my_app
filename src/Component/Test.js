import React, { Component } from 'react'
// import a from './Ani'
export default class Test extends Component {
    constructor(){
        super()
        this.state={
            name:'Shibansh Sahoo',
            data:'',
            data1:''
        }
        this.a = this.a.bind(this)
        this.b = this.b.bind(this)

    }



    // async componentDidMount(){
    //     //  setTimeout(() => {
    //     //     document.querySelector('.test').style.background='pink'
    //     //   }, 3000);
    //     //   return () => clearTimeout(timer);

    //     setTimeout( async () => {
            
        
    //         const url = "https://catfact.ninja/fact"
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         const item = data
    //         // console.log(item)

    //         this.setState({ 
    //             data:item
    //         })
    //         console.log('this is ok '+this.state.data)
    //     // timer;
    // }, 3000);
    // }



    async a(){
        setTimeout(async() => {
            const url = 'https://www.boredapi.com/api/activity'
            const response = await fetch(url)
            const data = await response.json()
            const i = data

            console.log(i)
            this.setState({
                data1:i
            })
        }, 2000);
    }

    async b(){
        //  setTimeout(() => {
        //     document.querySelector('.test').style.background='pink'
        //   }, 3000);
        //   return () => clearTimeout(timer);

        setTimeout( async () => {
            
        
            const url = "https://catfact.ninja/fact"
            const response = await fetch(url)
            const data = await response.json()
            const item = data
            // console.log(item)

            this.setState({ 
                data:item
            })
            console.log('this is ok '+this.state.data)
        // timer;
    }, 3000);
    }

    componentDidMount(){
        this.a()
        this.b()
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
                    {this.state.data.fact}<br></br><br></br>

                    {this.state.data1.activity}
                </h1>
            </div>
        )
    }
}




