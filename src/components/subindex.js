import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../css/subindex.css';


import Index from './Index.js';
import Video from './Video.js';
import Cinema from './Cinema.js';
import Login from './Login.js';

import Draw from './Drawer.js';

class uFirst extends Component {
    render() {
        return (
            <Router>
                <div className="subindex">
                    <Route exact path="/" component={Index}  />
                    <Route path="/Index" component={Index} />
                    <Route path="/video" component={Video} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/login" component={Login} />
                    <Draw />
                </div>
            </Router>
        )
    }
}

var First = connect()(uFirst);


export default First;