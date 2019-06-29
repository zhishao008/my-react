import React, { Component } from 'react';
// 生命周期  React16 采用了新的内核架构 Fiber，Fiber 将组件更新分为两个阶段：Render Parse 和 Commit Parse
//   https://blog.csdn.net/wust_cyl/article/details/84306393  精讲生命周期使用场景
export default class Fiber extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag: false,
            agess: this.props.age
        }
    }
    // UNSAFE_componentWillMount(){
    //     //不安全
    // }
    componentDidMount(){
        console.log("componentDidMount");
    }
    // UNSAFE_componentWillReceiveProps(){
    //     //不安全
    // }
    // shouldComponentUpdate(){
    //     //console.log("shouldComponentUpdate");
    // }
    // UNSAFE_componentWillUpdate(){
    //     //不安全
    // }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    static getDerivedStateFromProps(nextProps, prevState){
        //其作用是根据传递的 props 来更新 state
        console.log("getDerivedStateFromProps");
        let { age } = nextProps;
        if(age !== prevState.age){
            return {
                age
            }
        }
        return null;
    }
    getSnapsshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapsshotBeforeUpdate");
        //https://blog.csdn.net/wust_cyl/article/details/84306393
    }
    componentDidCatch(){

    }
    click = ()=> {
        this.setState({ flag: !this.state.flag})
    }
    render(){
        return [
            <div key="1">生命周期{this.state.flag}</div>,
            <div key="123">{this.props.children}</div>,
            <button onClick={this.click} key="1w">setState</button>,
            <div key="12">{this.props.name}</div>
        ]
    }
}


/**
 *  https://segmentfault.com/a/1190000016617400  
 * 
Mounting（加载阶段：涉及6个钩子函数）
1、constructor()
加载的时候调用一次，可以初始化state
2、getDefaultProps()
设置默认的props，也可以用dufaultProps设置组件的默认属性。
3、getInitialState()
初始化state，可以直接在constructor中定义this.state
4、componentWillMount()
组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
5、render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
6、componentDidMount()
组件渲染之后调用，只调用一次

Updating（更新阶段：涉及5个钩子函数)
1、componentWillReceivePorps(nextProps)
组件加载时不调用，组件接受新的props时调用
2、shouldComponentUpdate(nextProps, nextState)
组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
3、componentWillUpdata(nextProps, nextState)
组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state
4、render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
5、componentDidUpdate()

组件加载时不调用，组件更新完成后调用
Unmounting（卸载阶段：涉及1个钩子函数）
componentWillUnmount()

组件渲染之后调用，只调用一次
 */

/**
 * Mounting（加载阶段：涉及4个钩子函数）
1、constructor()
加载的时候调用一次，可以初始化state
2、static getDerivedStateFromProps(props, state)
组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
3、render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
4、componentDidMount()
组件渲染之后调用，只调用一次

Updating（更新阶段：涉及5个钩子函数)
1、static getDerivedStateFromProps(props, state)
组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
2、shouldComponentUpdate(nextProps, nextState)
组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
3、render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
4、getSnapshotBeforeUpdate(prevProps, prevState)
触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法
5、componentDidUpdate()

组件加载时不调用，组件更新完成后调用
6、Unmounting（卸载阶段：涉及1个钩子函数）
组件渲染之后调用，只调用一次

Error Handling(错误处理)
7、componentDidCatch(error，info)
任何一处的javascript报错会触发
 */