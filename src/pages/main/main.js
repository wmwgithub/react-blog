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
import { Cookies } from "react-cookie";
const cookie = new Cookies()
class Main extends Component {
  state={
    avatar:"",
    name: "",
    signature: ""
  }
  componentDidMount(){
    if(cookie.get("openid")){
      //可以获取到openid cookie没失效
      this.setState({
        avatar:cookie.get("avatar"),
        name: cookie.get("name"),
        signature: "个性签名功能等待开发中😁"
      })
    }else{
      //cookie已经失效刷新页面
      window.location.reload()
    }

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
            <ArticleCard showPagination={true}/>
          </Col>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
        </Row>
        <AddButton />
      </div>
    );
  }
}
export default Main;
