import PostMethod from "./postmethod";
import { Cookies } from "react-cookie";
import { message } from "antd";
const postmethod = new PostMethod();
const loginCookie = new Cookies();
export default async (router, data) => {
  let loginRes = await postmethod.httpPost(router, data);
  if (loginRes.code === 1) {
    for (let value in loginRes.data) {
      loginCookie.set(value, loginRes.data[value]);
    }
    window.location.replace(window.location.origin + "/#/main");
    window.location.reload();
    return true;
  }
  message.error(loginRes.message);
  return false;
};
