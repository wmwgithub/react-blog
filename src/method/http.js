import axios from 'axios'
class Http {
  //所有return 都是返回确切的值
  static baseUrl = 'https://www.easy-mock.com/mock/5c9389c2933c7c3297e517a4/blog'

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