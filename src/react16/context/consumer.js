import React,{Component} from "react";
const ThemeContext = React.createContext('light');
export default class ThemeConsumer extends Component {
    render(){
        return (
            <div>
                <Middle />
            </div>
        )
    }
}
class Middle extends Component {
    render(){
        return (
            <ThemeContext.Consumer>
                {theme => <div theme={theme}>{theme}</div>}
            </ThemeContext.Consumer>
        )
    }
}
