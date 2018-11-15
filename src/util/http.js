import axios from 'axios'
// import axios from '../../node_modules/axios/dist/axios'
// Vue.prototype.axios = axios
/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url,params = {}) {
    return new Promise( (resolve, reject ) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url, data = {}) {
     return new Promise((resolve, reject) => {
         axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
     })
 }


 /**
  * 
  * qs方法
  */

// import qs from 'qs';
// const data = { 'bar': 123 };
// const options = {
//     method: 'POST',
//     headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     data: qs.stringify(data),
//     url,
// };
// axios(options);