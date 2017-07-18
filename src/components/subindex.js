import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import '../css/subindex.css';



import Draw from './Drawer.js';

class uFirst extends Component {
    render() {
        return (
            <Router>
                <Draw />
            </Router>
        )
    }
}

var First = connect()(uFirst);


export default First;