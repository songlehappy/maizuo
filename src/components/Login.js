import React, { Component } from 'react';
import $ from 'jquery';
// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

import { Button } from 'antd-mobile';
class uLogin extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center', padding: '1rem' }}>
				<div style={{ padding: '1rem 0', position: 'relative' }}>
					<div style={{ position: 'absolute', bottom: '26%', width: '99%', height: '0.9rem', border: '2px solid #ccc', borderTop: 'none' }}></div>
					<input ref='username' type="text" placeholder='输入手机号/邮箱' style={{ width: '94%', border: '0', height: '1.2rem', fontSize: '0.5rem', padding: '0.2rem 0.3rem', background: '#f1f1f1', position: 'relative', }} />
				</div>
				<div style={{ padding: '1rem 0', position: 'relative' }}>
					<div style={{ position: 'absolute', bottom: '26%', width: '99%', height: '0.9rem', border: '2px solid #ccc', borderTop: 'none' }}></div>
					<input ref='pwd' type="password" placeholder='输入密码/验证码' style={{ width: '94%', border: '0', height: '1.2rem', fontSize: '0.5rem', padding: '0.2rem 0.3rem', background: '#f1f1f1', position: 'relative', }} />
				</div>
				<div className="loginmessage">1231</div>
				<div className="login" style={{ padding: '1rem 0' }}>
					<Button type="primary" inline style={{ fontSize: '1rem' }} onClick={this.gologin.bind(this)}>登录</Button>
				</div>
			</div>
		)
	}

	gologin() {
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if (!username) {
			$('.loginmessage').css('display', 'block').html('请确认输入手机号/邮箱');
		} else if (!pwd) {
			$('.loginmessage').css('display', 'block').html('请确认输入密码/验证码');
		} else {
			$('.loginmessage').css('display', 'none');
			//请求登录
			$.get('http://localhost:8080/users/login?username=' + username + '&pwd=' + pwd, function (res) {
				
				alert(res);
			})
			// console.log(111);
		}



	}

	componentDidMount() {
		this.props.changeHead();
	}
}

var Login = connect(
	function (state) {
		return {

		}
	},
	function (dispatch) {
		return ({
			changeHead: function () {
				dispatch({
					type: 'CHANGE_HEAD',
					data: '登录'
				})
			}
		})
	}
)(uLogin);


export default Login;