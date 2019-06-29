import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const HomePage = () => <div>13123</div>
const UsersPage = () => <div>11111</div>
ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        {/* <Route path='login' component={Login} /> */}
        {/* <Route path='/register' component={Register} /> */}
        <Route path="/app" component={HomePage} />
        <Route path="/users" component={UsersPage} />
    </Switch>
</BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();
