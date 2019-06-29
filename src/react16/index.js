import React, { Component } from 'react';
import RenderTest from './renderTest';
//import ErrorBoundAry from './errorBoundary';  //异常捕获
import CreatePortal from "./createPortal";
import Fragment from "./fragment/fragment";
import Provider from "./context/provider";
import Consumer from "./context/consumer";
import RenderProps from "./render props/mouseTracker";
import ForwardRef from "./forwardRef";
import Fiber from "./fiber";
import Hooks from "./hooks/index";
// import Lazy from "./lazy-suspense/lazy";
export default class Index extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      name: "lizhi",
      age: 30
    }
  }
  componentDidMount(){
      console.log(this.myRef)
  }
  //生命周期测试
  fibers = () => {
    this.setState({name:"zhishao"})
  }
  fiberss = () => {
    this.setState({age: 20})
  }
  
  render() {
    return (
      <div className="">
        <div ref={this.myRef}>ref</div>
        <RenderTest />
        {/* <ErrorBoundAry /> */}
        <CreatePortal>
            <span>aaaaaaaaaaaa</span>
            <span>bbbbbbbbbbbb</span>
        </CreatePortal>
        <Fragment />
        <Provider>
            <Consumer/>
        </Provider>
        <RenderProps />
        <ForwardRef name={this.state.name} age={this.state.age}/>
        <Fiber>   
          <button onClick={this.fibers}>props change1</button>
          <button onClick={this.fiberss}>props change2</button>
        </Fiber>
        {/* <Lazy /> */}
        <Hooks />
      </div>
    );
  }
}