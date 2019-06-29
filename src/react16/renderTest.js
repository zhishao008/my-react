import React, { Component } from 'react';
export default class Index extends Component {
//render可以返回数组、字符串、react组件、数字、boolean值
  render() {
    return [
        <li key="a">aaa</li>,
        <li key="b">bbb</li>,
        <li key="c">ccc</li>
    ];
  }
//   render() {
//     return 'Look ma, no spans!';
//   }
}