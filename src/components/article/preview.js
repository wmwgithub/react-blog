import React from "react";
import { UserCard } from "../";
import "./index.less"
import { Time } from "../../utils";
export default props => {
  let date = new Date().getTime();
  let time = new Time(date,"YYY.MM.DD",".").getTime();
  return (
    <div className="preview">
      <h1>{props.title}</h1>
      <UserCard name={props.name} avatar={props.avatar} signature={time} />
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  );
};
