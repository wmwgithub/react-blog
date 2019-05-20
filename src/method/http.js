import axios from 'axios'
import {
  message
} from 'antd'
class Http {
  //所有return 都是返回确切的值
  static baseUrl = 'https://www.easy-mock.com/mock/5c9389c2933c7c3297e517a4/blog'
  static totalActicle() {
    let url = this.baseUrl
    return axios
      .get(`${url}/total`)
      .then((res) => {
        return res.data.data.total
      })
  }
  static write(title,text){
    let url = this.baseUrl
    if(!(title&&text)){
      message.error(`title:${title},text:${text}`)
      return 0
    }
    return axios
    .post(`${url}/writeacticle`,JSON.stringify({title,text}))
    .then((res)=>{
      if(res.data.success){
        message.success('~成功发布文章~')
        return res.data.success
      }
    })
  }
  static allActicle(userId){
    let url = this.baseUrl
    if(!userId){
      message.error(`userId is required ${userId}`)
      return 0
    }
    return axios
    .post(`${url}/allacticle`,JSON.stringify({userid:userId}))
    .then((res)=>{
      return res.data.data.list
    })
  }
  static search(userId,title){
    let url = this.baseUrl
    return axios
    .get(`${url}/search`,JSON.stringify({userId,title}))
    .then((res)=>{
      return res.data.data.list
    })
  }
  static acticleInfo(userid,index){
    let url = this.baseUrl
    return axios
    .post(`${url}/info`,JSON.stringify({userid,index}))
    .then((res)=>{
      return res.data
    })
  }
}
export default Http