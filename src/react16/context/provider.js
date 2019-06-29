import React,{Component} from "react";

const ThemeContext = React.createContext('light');
export default class ThemeProvider extends Component {
    state = { theme: 'light'};
    render(){
        return (
            <ThemeContext.Provider value={this.state.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
