新特性   https://segmentfault.com/a/1190000017321982?utm_medium=referral&utm_source=tuicool#articleHeader13   
context
createRef
forwardRef  实现父组件可以操作子组件的DOM
生命周期
strictMode
diff
react事件和JS原生事件之间有什么区别
key的作用
render props 是指一种再React组件之间使用一个值为函数的prop共享代码的简单技术
render可以返回数组、字符串、react组件、数字、boolean值
createPortal
Fiber是对 React 核心算法的一次重新实现，将原本的同步更新过程碎片化，避免主线程的长时间阻塞，使应用的渲染更加流畅。
Call Return（react-call-return npm）  16.1
Fragment  16.2
createContext  16.3

官方文档    https://react.docschina.org/docs/hooks-intro.html

/*setState*/      https://juejin.im/post/5b45c57c51882519790c7441
setState 实际上执行的是performWork、performWorkOnRoot、performSyncWork、performAsyncWork 这个四个方法
setState,合成事件（react为了解决跨平台 兼容性等问题，自己封装了一套事件机制，代理了原生事件， 像onClick,onChange 都是合成事件
1、生命周期中的setState,和合成事件一样，当 componentDidmount 执行的时候，react内部并没有更新，执行完componentDidmount  后才去 commitUpdateQueue 更新。这就导致你在 componentDidmount 中 setState 完去console.log拿的结果还是更新前的值
2、原生事件中的setState
原生事件的调用栈就比较简单了，因为没有走合成事件的那一大堆，直接触发click事件，到 requestWork ,在requestWork里由于 expirationTime === Sync 的原因，直接走了 performSyncWork 去更新，并不像合成事件或钩子函数中被return，所以当你在原生事件中setState后，能同步拿到更新后的state值
3、setTimeout 中的setState
在 setTimeout 中去 setState 并不算是一个单独的场景，它是随着你外层去决定的，因为你可以在合成事件中 setTimeout ，可以在钩子函数中 setTimeout ，也可以在原生事件setTimeout，但是不管是哪个场景下，基于event loop的模型下， setTimeout 中里去 setState 总能拿到最新的state值。
4、setState 中的批量更新
上面的结果最终是1，在 setState 的时候react内部会创建一个 updateQueue ，通过 firstUpdate 、 lastUpdate 、 lastUpdate.next 去维护一个更新的队列，在最终的 performWork 中，相同的key会被覆盖，只会对最后一次的 setState 进行更新。

总结 :

setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。
setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。


onInput 和 onChange 区别  链接：https://juejin.im/post/5caea6faf265da038145c338
onchange事件仅仅在键盘或者鼠标操作改变对象属性，且失去焦点时触发，脚本触发无效；而onkeydown/onkeypress/onkeyup在处理复制、粘贴、拖拽、长按键（按住键盘不放）等细节上并不完好。
onpropertychange属性可在某些情况下解决上面存在的问题，不用考虑是否失去焦点。无论js操作还是键盘鼠标手动操作，仅仅要HTML元素属性发生改变就可以马上捕获到。遗憾的是。onpropertychange为IE专属的。
HTML5中的标准事件oninput，实时监听（和ie的onpropertychange一样），只是IE9下面的浏览器是不支持oninput事件的。
