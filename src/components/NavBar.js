import React, { Component } from 'react';

import '../css/navbar.css';
import '../css/iconfont/iconfont.css';

class NavBar extends Component {
    render(){
        return(
            <div className="header">
                <div className="header_l">
                   <div className="" ><i className="iconfont">&#xe602;</i></div> 
                   <div>卖座电影</div> 
                </div> 
                <div className="header_r">
                   <div>深圳<i className="iconfont">&#xe615;</i></div>
                   <div><i className="iconfont">&#xe745;</i></div>
                </div> 
            </div>
        )
    }
}

export default NavBar;