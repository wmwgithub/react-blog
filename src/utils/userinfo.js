 import { Cookies } from "react-cookie";
const cookie = new Cookies();
let userinfo={
    name:cookie.get("name"),
    avatar:cookie.get("avatar"),
    signature:"个性签名·······"
}
