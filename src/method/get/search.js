import GetMethod from "./getmethod";
import { Cookies } from "react-cookie";
const getmethod = new GetMethod();
const  cookie = new Cookies()
export default (title)=>{
    // console.log(title)
    let openid=cookie.get("openid")
    if(!openid || !title){
        return []
    }
    let titleLists = getmethod.http(`/search?title=${title}`)
    // console.log("ti",titleLists)
    return titleLists
}