import React, { Component } from 'react';
import $ from 'jquery';
// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { Accordion } from 'antd-mobile';

import SubCinema from './subcomponents/subCinema.js'
import Gotop from './subcomponents/Gotop.js';

class uCinema extends Component {
	
	render() {

		return (
			<div>
				<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.props.onChange}>
					<Accordion.Panel header="宝安区" >
						<SubCinema list='宝安区' />
					</Accordion.Panel>
					<Accordion.Panel header="龙华新区">
						<SubCinema list='龙华新区' />
					</Accordion.Panel>
					<Accordion.Panel header="罗湖区">
						<SubCinema list='罗湖区' />
					</Accordion.Panel>
					<Accordion.Panel header="南山区">
						<SubCinema list='南山区' />
					</Accordion.Panel>
					<Accordion.Panel header="福田区">
						<SubCinema list='福田区' />
					</Accordion.Panel>
					<Accordion.Panel header="龙岗区">
						<SubCinema list='龙岗区' />
					</Accordion.Panel>
					<Accordion.Panel header="光明新区">
						<SubCinema list='光明新区' />
					</Accordion.Panel>
					<Accordion.Panel header="坪山新区">
						<SubCinema list='坪山新区' />
					</Accordion.Panel>
					<Accordion.Panel header="盐田区">
						<SubCinema list='盐田区' />
					</Accordion.Panel>
				</Accordion>
			</div>
		)
	}

	componentDidMount() {
		this.props.changeHead();
		this.props.getData();
		Gotop();
	}
}

var Cinema = connect(
	function (state) {
		return {

		}
	},
	function (dispatch) {
		return {
			onChange: function (key) {
				// var place = ['宝安区', '龙华新区', '罗湖区', '南山区', '福田区', '龙岗区', '光明新区', '坪山新区', '盐田区']
				console.log(key);
			},
			getData: function () {
				dispatch({
					type: "DATA_START",
				})

				//请求数据
				setTimeout(function () {
					$.get('http://localhost:8080/cinema', function (res) {
						var list = res.data.cinemas;
						// console.log(list);
						dispatch({
							type: 'CINEMA_DATA',
							data: list,
						})
					})
				}, 300)
			},
			changeHead:function(){
				dispatch({
					type:'CHANGE_HEAD',
					data: '全部电影'
				})
			}
		}
	}
)(uCinema);

export default Cinema;