import PostMethod from "./postmethod";
import { Cookies } from "react-cookie";
import {message} from 'antd'
const postmethod = new PostMethod();
const cookie = new Cookies()
export default async ( title,type,content) => {
   let userid = parseInt( cookie.get("id"))
   console.log(cookie.getAll())
   console.log(userid)
   let formData= new FormData()
   formData.append("title",title)
   formData.append("type",type)
   formData.append("content",content)
   formData.append("userid",userid)
  let writeResult= await postmethod.writePost('/create', formData);
  console.log(writeResult)
  if(writeResult.userid){
      message.success('~成功发布文章~')
      window.history.back(-1);
      return true    
  }
  return false

};
