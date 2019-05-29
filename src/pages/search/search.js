import React from "react";
import { TopNavBar } from "../../components";
import { Affix, Row, Col, Divider } from "antd";
import "./search.less";
import SearchCard from "./search-card";
export default class SearchPage extends React.Component {
  state = {
    avatar: ""
  };
  render() {
    // console.log(this.props.match.params.keywords)
    return (
      <div>
        <Affix>
          <div className="navBar">
            <Row>
              <Col xs={{ span: 1 }} lg={{ span: 3 }} />
              <Col xs={{ span: 22 }} lg={{ span: 18 }}>
                <TopNavBar />
              </Col>
              <Col xs={{ span: 1 }} lg={{ span: 3 }} />
            </Row>
          </div>
        </Affix>
        <Row>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
          <Col xs={{ span: 22 }} lg={{ span: 18 }}>
            <h3 style={{ fontWeight: "bolder", marginTop: "30px" }}>
              搜索词|{this.props.match.params.keywords}
            </h3>
          </Col>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
        </Row>
        <Divider />
        <Row>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
          <Col xs={{ span: 22 }} lg={{ span: 18 }}>
            <SearchCard title={this.props.match.params.keywords} showPagination={false}/>
          </Col>
          <Col xs={{ span: 1 }} lg={{ span: 3 }} />
        </Row>
      </div>
    );
  }
}
