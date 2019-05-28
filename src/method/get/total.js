import { Cookies } from "react-cookie";
import GetMethod from "./getmethod";
const getmethod = new GetMethod();
const  cookie = new Cookies()
export default async (page)=>{
    let userId=cookie.get("id")
    // console.log(userId)
    let total = await getmethod.http(`/total?userid=${userId}`)
    // console.log('total',total)
    if(total){
        return total
    }
    return 1
}