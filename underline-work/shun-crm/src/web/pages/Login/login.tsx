import * as React from "react";
import { createRef } from 'react';
import './login.css';
import { Input, Button, Icon, message } from 'antd';

// 判断是否登陆过
const checkLogin = () => {
	let curUser = sessionStorage.getItem('curUser') ? JSON.parse(sessionStorage.getItem('curUser')) : undefined;

	if (curUser) window.location.href = '/home';
		else return;
}

const submitLogin = (firstDom, SecondDom) => {
	if (!firstDom.current.state.value || !SecondDom.current.state.value) {
		return message.error('Please check if all the options are filled out!');
	}

	let curUser = {
		name: firstDom.current.state.value,
		password: SecondDom.current.state.value
	};

	sessionStorage.setItem("curUser", JSON.stringify(curUser));
	window.location.href = '/home';
}

const LoginComponent = () => {
		checkLogin();
		const firstInput = createRef();
		const SecondInput = createRef();

    return <>
            <div className="ligin-container">
							<div className="login-box">
								<form>
									<Input ref={ firstInput } prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
									<Input ref={ SecondInput } prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password"/>
									<Button onClick={ submitLogin.bind(this, firstInput, SecondInput) }>login!</Button>	
								</form>		
							</div>
						</div>
           </>
}

export default LoginComponent;