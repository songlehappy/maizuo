import React, { Component } from 'react';

//引入子组件
import Listnow from './subcomponents/Listnow.js';
import Listcoming from './subcomponents/Listcoming.js';
import Gotop from './subcomponents/Gotop.js';
// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { Tabs } from 'antd-mobile';
const TabPane = Tabs.TabPane;



// function callback(key) {
// 	console.log('onChange', key);
// }
// function handleTabClick(key) {
// 	console.log('onTabClick', key);
// }


class uVideo extends Component {
	render() {
		var id = window.location.hash.slice(1);

		return (
			<div className='video' style={{ height: '100%' }}>
				<Tabs swipeable={false} defaultActiveKey={id ? id : '1'}>
					<TabPane tab="正在热映" key="1">
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
							<Listnow />
						</div>
					</TabPane>
					<TabPane tab="即将上映" key="2">
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
							<Listcoming />
						</div>
					</TabPane>

				</Tabs>
			</div>
		)
	}

	componentDidMount() {
		this.props.changeHead();
		Gotop();
	}

}


var Video = connect(
	function (state) {
		return {
			open: state.open,
			head: state.data_head
		}
	},
	function (dispatch) {
		return {
			changeHead: function () {
				dispatch({
					type: 'CHANGE_HEAD',
					data: '卖座电影'
				})
			}
		}
	}
)(uVideo);
export default Video;