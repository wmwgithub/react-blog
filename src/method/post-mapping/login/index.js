import PostMethod from '../postmethod'
const postmethod = new PostMethod()
export default async (router,data)=>{
 let loginRes=await postmethod.httpPost(router,data)
    console.log(loginRes)
}