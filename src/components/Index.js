import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

class uIndex extends Component {
	render(){
		return (
			<div>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
			</div>
		)
	}
}

var Index = connect()(uIndex);


export default Index;