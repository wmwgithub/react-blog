import axios from 'axios'
import {
  message
} from 'antd'
class Http {
  static baseUrl = 'https://www.easy-mock.com/mock/5c9389c2933c7c3297e517a4/blog'
  static getActicle(showMsg) {
    let url = this.baseUrl
    return new Promise(function (resolve, reject) {
      //封装保证主体代码里面没有if else
      axios
        .get(`${url}/acticle`)
        .then((res) => {
          if (res.state = 200) {
            if (showMsg) {
              message.success('欢迎你')
            }
            resolve(res.data.data.list)
          }
          resolve([])
        })
        .catch((err) => {
          message.error(`${err}`)
        })
    })
  }
  static totalActicle() {
    let url = this.baseUrl
    return axios
      .get(`${url}/total`)
      .then((res) => {
        return res.data.data.total
      })
  }
}
export default Http