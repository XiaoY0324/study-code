import * as React from "react";
import  { createRef, RefObject, ChangeEvent } from 'react';  
import { Input, Button, Icon, message } from 'antd';

interface formDataProps {
  username: string,
  password: string,
  loading: boolean,
  loginHandle: () => void,
  changeInput: (key: string, domRef: RefObject<Input>) => void
}

const intUsername: RefObject<Input> = createRef();
const intPassword: RefObject<Input> = createRef();

const LoginComponent = (props: formDataProps) => {
  let { username, password, loading, loginHandle, changeInput } = props;

  return <>
          <form>
            <Input  prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="username"
                    onChange = { changeInput.bind(this, 'username', intUsername) }
                    ref = { intUsername }
                    defaultValue={ username }/>
            <Input  prefix = { <Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder = "password"
                    ref = { intPassword }
                    onChange = { changeInput.bind(this, 'password', intPassword) }/>
            <Button onClick = { loginHandle } loading = { loading }>
              login!
            </Button>	
          </form>		
         </>
}

export default LoginComponent;