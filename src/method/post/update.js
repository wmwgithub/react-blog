import PostMethod from "./postmethod";
import { cookie } from '../../utils';
import {message} from 'antd'
const postmethod = new PostMethod();
export default async ( {title,type,content,articleId}) => {
    console.log({title,type,content,articleId})
   let userid = parseInt( cookie.getCookie("id"))
   let formData= new FormData()
   formData.append("title",title)
   formData.append("type",type)
   formData.append("content",content)
   formData.append("userid",userid)
   formData.append("articleId",articleId)
  let result= await postmethod.httpPost('/update', formData);
//   console.log(writeResult)
  if(result.userid){
      message.success('~成功更新文章~')
      return true    
  }
  message.error(result.message)
  return false

};
