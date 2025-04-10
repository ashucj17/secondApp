import React, { Component } from "react"
import Header from "../component/Header"
import Footer from '../component/Footer'


class App extends Component{
    render(){
        return(
            <div>
            <Header />
            <hr/>
            <h1>Class based component</h1>
            <Footer year='2025' month='April'/>
            </div>
        )
    }
}

export default App