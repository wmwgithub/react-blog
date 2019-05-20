import axios from'axios'
class GetMethod{
  /**
   * 类实例化才执行的操作
   */
  constructor(){
    this.baseUrl ="https://www.easy-mock.com/mock/5c9389c2933c7c3297e517a4/blog"
  }
  http(router){
    return axios
    .get(this.baseUrl+router)
    .then((res)=>{
        return res.data
    })
  }
 }
export default GetMethod