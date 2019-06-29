import React, { Component } from "react";
import { createPortal } from "react-dom";
export default class Dialog extends Component{
    constructor(props){
        super(props);
        this.node = document.createElement("div");
        document.body.appendChild(this.node);
    }
    render(){
        return createPortal(
            <div>
                {this.props.children}
            </div>, 
            this.node
        )
    }
}