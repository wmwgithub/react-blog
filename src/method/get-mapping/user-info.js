import GetMethod from './getmethod'
const getMethod =new GetMethod()
export default async ()=>{
    // let info = await getMethod.http('/userInfo')
    return {
      "name": "Steven Lopez",
      "avatar": "http://dummyimage.com/200x100/50B347/FFF&text=EasyMock",
      "signature": "Talk is cheap show me the code"
    }
}
