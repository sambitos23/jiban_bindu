import React from "react";
import "./style/css/chat.css";
import img1 from "./style/images/chat/hello.webp";

export default class Chat extends React.Component{
    render(){
        return(
            <div>
                <img className="pic1" src={img1} />
            </div>
        )
    }
} 