import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { ActivityIndicator } from 'antd-mobile';

import '../css/navbar.css';
import '../css/iconfont/iconfont.css';

class uNav extends Component {
    render(){
        return(
            <div className="header">
                <div className="header_l" onClick={this.props.leftHead}>
                   <div className="" ><i className="iconfont">&#xe602;</i></div> 
                   <div>{this.props.head}</div> 
                </div> 
                <div className="header_r">
                   <div>深圳<i className="iconfont">&#xe615;</i></div>
                   <div><a href="http://localhost:3000/login"><i className="iconfont">&#xe745;</i></a></div>
                   <ActivityIndicator 
                        className='activityIndicator'
                        size='large'
                        animating={this.props.animating}
                   />
                </div> 
            </div>
        )
    }
}


var Nav = connect(
    function(state, ownProps){
        return{
            animating: state.animating,
            head: state.data_head,
        }
    },
    function(dispatch, ownProps){
    //    console.log();
        return{
            leftHead: function(){
                // console.log(11);

                dispatch({
                    type: 'LEFT_HEAD',
                    
                })
            }
        }
    }
)(uNav);
export default Nav;