import { Cookies } from "react-cookie";
const cookie = new Cookies();

let getCookie = name => cookie.get(name);
let setCookie = (key, value) => cookie.set(key, value);
let delCookie = name => {
  if (typeof name == "string") {
    cookie.remove(name);
  }
  if (typeof name == "object") {
    Object.keys(name).map(value => cookie.remove(value));
  }
};
export default {
    getCookie,
    setCookie,
    delCookie
}
