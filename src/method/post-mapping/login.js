import PostMethod from "./postmethod";
import { Cookies } from "react-cookie";
const postmethod = new PostMethod();
const loginCookie = new Cookies()
export default async (router, data) => {
  let loginRes = await postmethod.httpPost(router, data);
  if (loginRes.openid) {
      for(let value in loginRes){
          loginCookie.set(value,loginRes[value],"login",1)
      }
    console.log(loginRes)
    return true;
  }
  return false;
};
