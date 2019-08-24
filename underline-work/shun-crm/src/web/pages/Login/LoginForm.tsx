import * as React from "react";
import  { useRef, RefObject } from 'react';  
import { Input, Button, Icon } from 'antd';

interface formDataProps {
  username: string,
  password: string,
  loading: boolean,
  loginHandle: () => void,
  changeInput: (key: string, domRef: RefObject<Input>) => void
}


const LoginComponent = (props: formDataProps) => {
  const intUsername: RefObject<Input> = useRef();
  const intPassword: RefObject<Input> = useRef();
  let { username, loading, loginHandle, changeInput } = props;

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