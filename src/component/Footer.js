import React from "react";

function Footer(props){

    console.log(props);
    {/* Destructuring*/}
const{month,year} = props

    return(
        <footer>
            <hr/>
            <h2>&copy; DevTools {month} {year}</h2>
        </footer>
    )
}

export default Footer;