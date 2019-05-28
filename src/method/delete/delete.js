import axios from "axios";
import config from "../../config";
import { Cookies } from "react-cookie";
import { message } from "antd";
const cookie = new Cookies();
export default articleId => {
  let userId = cookie.get("id");
  let password = cookie.get("password");
  if (userId && password) {
    let formData = new FormData();
    formData.append("userid", userId);
    formData.append("password", password);
    formData.append("id", articleId);
    return axios
      .delete(config.proUrl + "/delete", {
        data: formData
      })
      .then(res => {
        if(res.data.code===-1){
            message.error(`删除错误:${res.data.message}`)
            return false
        }
        message.success("删除成功")
        return true;
      });
  }
};
