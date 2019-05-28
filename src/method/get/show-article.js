import GetMethod from "./getmethod";
const getmethod = new GetMethod();
export default  (articleId)=>{
    let articleInfo = getmethod.http(`/search/article?id=${articleId}`)
    return articleInfo
}