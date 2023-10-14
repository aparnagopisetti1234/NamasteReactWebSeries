import myImage from "../../BiteBliss.png"
import { useState } from "react";
const Header=()=>{
 
    const[btn_txt,setbtn_txt] =useState("Login");

    return (<div className="header">
         <div className="logo">
            <img  className="logo" 
            src={myImage} alt="logo" />
         </div>
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li> Cart</li>

            </ul>
            <button className="btn-log" onClick={()=>(btn_txt=="Login"?setbtn_txt("Logout"):setbtn_txt("Login"))}>{btn_txt}</button>
         </div>
    </div>)
}


export default Header