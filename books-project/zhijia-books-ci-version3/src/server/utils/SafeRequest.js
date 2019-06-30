/**
 * 安全请求方法 
 * 每次node 请求 必须经过这一层
 */
import { baseUrl } from '../config';
import fetch from 'node-fetch';

class SafeRequest {
    constructor(options) {
        this.options = options;
        this.baseUrl = baseUrl;
    }

    fetch() {
        // 就算php后台都挂了 也在这拦住 给一个正常的返回值
        let result = {
            code: 0,
            message: "",
            data: []
        }   

        return new Promise((resolve, reject) => {
            let ydfetch = fetch(this.baseUrl + this.options.url, this.options.params);

            console.log(this.baseUrl + this.options.url, this.options);
            ydfetch.then(res => res.json())
            .then(json => {
                result.data = json;
                resolve(result);
            }).catch(err => {
                console.log(err);
                result.code = 1;
                result.message = '❌node-fetch 请求数据失败';
                reject(result); // 失败也返回正常数据
            });
        });
    }

}

export default SafeRequest;