import React, { Component } from "react"
import ReactDOM from "react-dom/client"

// Functional component
// const App = () => {
//     return (
//         <div> My app </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

class App extends Component{
    render(){
        return(
            <h1>Class based component</h1>
        )
    }
}

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<App/>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)