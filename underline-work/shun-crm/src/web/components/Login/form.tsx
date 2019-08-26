import * as React from "react";
import { Input, Button, Icon } from 'antd';

interface userInfo {
  username: string,
  password: string
}

interface formDataProps {
  token: userInfo,
  loading: boolean,
  loginIn: () => void,
  changeInput: (e: { target: { value: string, placeholder: string } }) => void 
}

const LoginComponent = (props: formDataProps) => {
  let { token, loading, loginIn, changeInput } = props;
  console.log(token);
  return <>
    <form>
      <Input prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' } } />}
        placeholder="username"
        onChange={ changeInput }
        value={ token.username } />
      <Input prefix={ <Icon type="password" style={{ color: 'rgba(0,0,0,.25)' } } />}
        placeholder="password"
        onChange={ changeInput }
        value={ token.password } />
      <Button onClick={ loginIn } loading={ loading }>
        登录
      </Button>
    </form>
  </>
}

export default LoginComponent;