import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

// import { Steps, Button, WhiteSpace } from 'antd-mobile';


// var Step = Steps.Step;


//创建UI组件
class uApp extends Component {
	render() {
		// console.log(Step);
		return (
			<div>
				

				<h1>biaoti</h1>
			</div>
		);
	}
}

// 基于UI组件创建出 容器组件
var App = connect(
	// 指定两个参数
	// 1. ui组件需要的数据
	// 2. ui组件上的方法操作
	function (state, ownProps) {
		return {
			biaoti: state.title,
			btnname: state.name
		}
	},
	function (dispatch, ownProps) {
		return {
			change: function () {
				dispatch({
					type: 'CHANGE_TITLE',
					title: '详情页'
				})
			}
		}
	}
	// {				//第二个参数还可以是一个对象 为前面一个 return 的东西
	// 	change: function() {
	// 		// 只需要return 一个 action
	// 		return {
	// 			type: 'CHANGE_TITLE',
	// 			title: '详情页'
	// 		}
	// 	}
	// }
)(uApp)

//暴露
export default App;
