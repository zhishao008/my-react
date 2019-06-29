import React,{ Component } from "react";

// class Input extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         let {ref} = this.props;
//         return (
//             <input type="text" placeholder="hello forwardRef" ref={ref} />
//         )
//     }
// }

const TextInput = React.forwardRef((props, ref) => (
    <input type="text" placeholder="hello forwardRef" ref={ref} />
    // <Input ref={ref}/>
))

const inputRef = React.createRef();

export default class ForwardRef extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("input value is " + inputRef.current.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <TextInput ref={inputRef}/>
                <button type="submit">submit</button>
            </form>
        )
    }
}
