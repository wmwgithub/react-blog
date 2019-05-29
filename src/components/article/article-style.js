import React from "react";
import { Row, Col, Divider } from "antd";
import { UserCard } from "../";
import "../jumbotron/index.less";
import "../user-card/index.less";
import "./index.less";
function ArticleStyle(props) {
  return (
    <div className="articleStyle">
      <Row>
        <Col xs={{ span: 1 }} lg={{ span: 5 }} />
        <Col xs={{ span: 22 }} lg={{ span: 14 }}>
          <h1>{props.title}</h1>
          <UserCard
            avatar={props.user.avatar}
            name={props.user.name}
            signature={props.time}
          />
          <Divider />
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 5 }} />
      </Row>
    </div>
  );
}

export default ArticleStyle;
