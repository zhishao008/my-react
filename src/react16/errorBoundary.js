import React from "react";
export default class ErrorBoundAry extends React.Component{
    state = {
        hasError: false
    };
    componentDidCatch(error, info){
        this.setState({
            hasError: true
        });
        //logErrorToMyService(error, info);
    }
    render(){
        if(this.state.hasError){
            return <h1>数据错误</h1>
        }
        return this.props.children;
    }
}