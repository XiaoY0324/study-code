/**
 * 合并函数
 */

 export default function compose(...funcs) {
     console.error(funcs);
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args))); // reduce 乱花渐欲迷人眼
 }