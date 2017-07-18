import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { Drawer } from 'antd-mobile';
import {  Route, NavLink } from 'react-router-dom';


import '../css/drawer.css';


import Index from './Index.js';
import Video from './Video.js';
import Cinema from './Cinema.js';
import Login from './Login.js';

class uDraw extends Component {

    render() {
        const sidebar = (
            <div className="navLeft">
                <ul>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/index">首页</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/video">影片</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/cinema">影院</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/index">商城(空)</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/index">演出(空)</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/login">我的</NavLink> </li>
                    <li> <NavLink onClick={this.props.onOpenChange} to="/index">卖座卡(空)</NavLink> </li>
                </ul>
            </div>
        );

        return (<div>
            <Drawer
                className="my-drawer"
                open={this.props.open}
                sidebar={sidebar}
                onOpenChange={this.props.onOpenChange}
            >
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/Index" component={Index} />
                    <Route path="/video" component={Video} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/login" component={Login} />
                </div>
            </Drawer>
        </div>);
    }
}


var Draw = connect(
    function (state, ownProps) {
        return {
            open: state.open
        }
    },
    function (dispatch, owmProps) {
        return {
            onOpenChange: function () {
                dispatch({
                    type: 'LEFT_NAV_APPEAR',
                })
            },
        }
    }
)(uDraw);

export default Draw;