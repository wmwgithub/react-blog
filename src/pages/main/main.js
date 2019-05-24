import React, { Component } from "react";
import { Row, Col, Affix, Divider } from "antd";
import {
  Jumbotron,
  TopNavBar,
  UserCard,
  ArticleCard,
  EditorButton,
  AddButton
} from "../../components/main";
import "./main.less";
import { userInfo } from "../../method/get-mapping";

class Main extends Component {
  state={
    avatar:"",
    name: "",
    signature: ""
  }
  async componentDidMount(){
    let user=await userInfo();
    this.setState({
      avatar:user.avatar,
      name: user.name,
      signature: user.signature
    })
  }
  render() {
    return (
      <div>
        <Affix>
          <div className="navBar">
            <Row>
              <Col xs={{ span: 1 }} lg={{ span: 3 }} />
              <Col xs={{ span: 22 }} lg={{ span: 18 }}>
                <TopNavBar avatar={this.state.avatar}/>
              </Col>
              <Col xs={{ span: 1 }} lg={{ span: 3 }} />
            </Row>
          </div>
        </Affix>
        <div className="jumbotron">
          <Row>
            <Col xs={{ span: 1 }} lg={{ span: 3 }} />
            <Col xs={{ span: 22 }} lg={{ span: 18 }}>
              <Jumbotron signature={this.state.signature} name={this.state.name}/>
            </Col>
            <Col xs={{ span: 1 }} lg={{ span: 3 }} />
          </Row>
        </div>
        <Row>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
          <Col xs={{ span: 22 }} lg={{ span: 18 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <UserCard avatar={this.state.avatar} signature={this.state.signature} name={this.state.name}/>
              <EditorButton />
            </div>
            <Divider />
            <ArticleCard />
          </Col>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
        </Row>
        <AddButton />
      </div>
    );
  }
}
export default Main;
