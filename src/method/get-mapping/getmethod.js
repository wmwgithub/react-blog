import axios from'axios'
import config from '../../config'
class GetMethod{
  /**
   * 类实例化才执行的操作
   */
  constructor(){
    this.baseUrl = config.proUrl
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