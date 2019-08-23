import * as React from "react";
import { createRef, RefObject } from 'react';
import { observable } from 'mobx'
import { Observer, useObserver, observer } from 'mobx-react-lite'

import LoginForm from './LoginForm';
import './login.css';
import { Input, Button, Icon, message } from 'antd';
import { Redirect } from "react-router-dom";

const loginState = observable({
	token: "",
	loading: false,
	username: "",
	password: ""
});

const loginHandler = () => {
	if (!loginState.username || !loginState.password) {

		return message.warning('请填写完整表单项');
	}

	loginState.loading = true;
	const { username, password } = loginState;

	setTimeout(() => {
		loginState.loading = false;
		localStorage.setItem('curUser', JSON.stringify({ username, password }));
		window.location.href = '/home';
	}, 1000);
};

// props传递 只能从父层修改属性 
const changeInput = (key: string, domRef: RefObject<Input>): void => {
	setTimeout(() => {
		if (key == 'username' && domRef.current.state.value) loginState['username'] = domRef.current.state.value;
		else if (key == 'password' && domRef.current.state.value) loginState['password'] = domRef.current.state.value;


		console.log('用户名', loginState.username);
		console.log('密码', loginState.password);
	});
}

const LoginComponent = observer(() => {
	console.log(localStorage.getItem('curUser'), !localStorage.getItem('curUser'), !!localStorage.getItem('curUser'));
	const showLogin = !!localStorage.getItem('curUser');

	return <>
		{
			showLogin
				? <Redirect to="/home" />
				: <div className="ligin-container">
					<div className="login-box">
						<LoginForm  {...loginState} loginHandle={loginHandler} changeInput={changeInput} />
					</div>
				</div>
		}
	</>
})

export default LoginComponent;