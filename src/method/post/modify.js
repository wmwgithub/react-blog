import { cookie } from "../../utils";
import PostMethod from "./postmethod";
import { message } from "antd";
export default async (articleId)=>{
  let openid=  cookie.getCookie("openid")
  let formData = new FormData()
  formData.append("openid",openid)
  formData.append("articleId",articleId)
  let postMethod = new PostMethod()
  let articleInfo = await  postMethod.httpPost("/modify",formData);
  if(articleInfo.code ===1){
      return articleInfo.data
  }
  message.error(articleInfo.message)
  window.history.back(-1);
  return {}
}