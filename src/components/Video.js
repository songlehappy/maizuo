import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

class uVideo extends Component {
	render(){
		return (
			<div>
				<h2>我是Video</h2>
			</div>
		)
	}
}


var Video = connect()(uVideo);
export default Video;