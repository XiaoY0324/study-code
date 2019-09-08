import { createContext } from "react";
import { decorate, observable } from "mobx";

interface userInfo {
  username: string,
  password: string
}

export class YsStore {
  needHidden: boolean = false; // 判断是否显示 banner 菜单 (tab 切换列) 登录页干掉 banner
  token: userInfo = localStorage['token'] ? JSON.parse(localStorage['token']) : { username: '', password: '' }; // 本地缓存读取 token  -> {  }
  loading: boolean = false;
  menuCollapsed: boolean = false;
}

// 修饰器
// decorator是在 声明阶段 实现类与类成员注解的一种语法。
decorate(YsStore, {
  token: observable,
  needHidden: observable,
  loading: observable,
  menuCollapsed: observable
});

export default createContext(new YsStore()); // 全局变量 
