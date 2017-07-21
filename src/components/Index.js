import React, { Component } from 'react';


// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

//自己的子组件
import MyCarousel from './subcomponents/Carousel.js';
import Now from './subcomponents/Now.js';
import Coming from './subcomponents/Coming.js';
import Gotop from './subcomponents/Gotop.js';

class uIndex extends Component {
	render(){
		return (
			<div>
				<MyCarousel />
				<Now />
				<div className="middle">
					<div></div>
					<Button disabled type="primary" inline size="large">即将上映</Button>
				</div>
				<Coming />
			</div>
		)
	}

	componentDidMount(){
		this.props.changeHead();
		Gotop();
	}
	
}

var Index = connect(
	function(state){
		return {
			open: state.open,
			head: state.data_head
		}
	},
	function(dispatch){
		return {
			changeHead:function(){
				dispatch({
					type:'CHANGE_HEAD',
					data: '卖座电影'
				})
			}
		}
	}
)(uIndex);


export default Index;