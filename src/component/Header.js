import React, { Component } from "react";
import './Header.css'

{/*function Header(){

    return(
        <h1> Header</h1>
    )
}

export default Header;*/}


{/* State in class component. Whenever we talk about class component its about logic. constructor is used to define the state in class component */}

class Header extends Component{

    constructor(){
        super()

        this.state={
            title: "React Search App",
            count:0,
            keyword: 'User Input'
        }
    }

    handleCounter = () =>{
        this.setState({count:this.state.count+1})
    }
    
    handleChange= () =>{
        let value= event.target.value;
        if(value == ""){
            this.setState({keyword:this.state.keyword});
        }else{
                this.setState({keyword:value})
            }
    }

    render(){
        return(
            <header>
                <div className="header">
                    <h1>{this.state.title}</h1>
                    <input onChange={this.handleChange}/>
                    <p>{this.state.keyword}</p>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.handleCounter}>Counter</button>
                    <hr/>
                </div>
            </header>
        )
    }

}

export default Header;