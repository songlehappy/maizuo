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
                <div className="header_l">
                   <div>深圳</div>
                   <div></div>
                </div> 
            </div>
        )
    }
}

export default NavBar;