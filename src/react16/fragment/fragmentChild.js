import React, {
    Component
} from "react";
export default class Fragment extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <React.Fragment>
                <li>Fragment1</li>
                <li>Fragment2</li>
            </React.Fragment>
        );
    }
}