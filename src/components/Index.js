import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import MyCarousel from './subcomponents/Carousel.js';
class uIndex extends Component {
	render(){
		return (
			<div style={{position:'relative',zIndex:this.props.open?0:203}}>
				<MyCarousel />
				<h2>我是Index</h2>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
				<h2>我是Index</h2>
			</div>
		)
	}
}

var Index = connect(
	function(state){
		return {
			open: state.open,
		}
	},
	function(){

	}
)(uIndex);


export default Index;