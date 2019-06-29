import React,{ Component } from "react";
class Cat extends Component {
    render(){
        const mouse = this.props.mouse;
        return(
            <div style={{width:"20px",height:"20px",background:"red",position:"absolute",left:mouse.x,top:mouse.y}}></div>
        )
    }
}

class Mouse extends Component {
    state = { x:0, y:0 }
    handleMouseMove(e){
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }
    render(){
        return(
            <div style={{height:"200px",width:"600px",background:"#ccc"}} onMouseMove={this.handleMouseMove.bind(this)}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default class MouseTranker extends Component {
    render(){
        return (
            <div>
                <h1>移动鼠标</h1>
                <Mouse render={mouse => (<Cat mouse={mouse} />)}/>
            </div>
        )
    }
}