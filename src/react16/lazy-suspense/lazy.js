import React,{ Suspense, Component } from "react";

const Com1 = React.lazy(() => import('./component1'));
const Com2 = React.lazy(() => import('./component2'));
export default class Lazy extends Component {
    render(){
        return (
            <div>
                <Suspense callback={<div>Loading...</div>}>
                    <Com1 />
                    <Com2 />
                </Suspense>
            </div>
        )
    }
}