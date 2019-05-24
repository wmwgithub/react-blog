import React from "react";
import { UserCard } from "../main";
import "./index.less"
export default props => {
  let date = new Date();
  let time = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  return (
    <div className="preview">
      <h1>{props.title}</h1>
      <UserCard name={props.name} avatar={props.avatar} signature={time} />
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  );
};
