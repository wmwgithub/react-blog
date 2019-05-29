import axios from'axios'
import config from '../../config';
class PostMethod{
  /**
   * 类实例化才执行的操作
   */
  constructor(){
    this.baseUrl =config.proUrl
  }
  httpPost(router,data){
    // data = JSON.stringify(data)
    // console.log(data)
    return axios
    .post(this.baseUrl+router,data)
    .then((res)=>{
        return res.data
    })
  }
  writePost(router,data){
    // console.log("write",data)
    return axios({
      headers:{
      // "Content-Type":"application/x-www-form-urlencoded"
      "Content-Type":"multipart/form-data"
      },
      url:this.baseUrl+router,
      method:"post",
      data:data,
    })
    .then((res)=>{
      return res.data
    })
  }
 }
export default PostMethod