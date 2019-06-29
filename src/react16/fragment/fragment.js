import React, {
    Component
} from "react";
import Child from "./fragmentChild";
export default class Fragment extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <ul>
                <Child />
            </ul>
        );
    }
}