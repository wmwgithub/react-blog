import React from "react";
import "./index.less";
export default(props)=>{
  return (
    <div className="jumbotronBox">
      <div className="signature">
        {/* 个性签名 */}
        {props.signature}
      </div>
      <div className="userName">{props.name}</div>
    </div>
  );
}