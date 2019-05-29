import React from "react";
import { ArticleStyle } from "../../components/";
import { showArticle } from "../../method";
import {Time} from "../../utils";
import { TopNavBar } from "../../components";
import { Col, Row, Affix, Icon, Divider } from "antd";
import { Link } from "react-router-dom";
import "./index.less";
class Article extends React.Component {
  state = {
    article: {
      user: ""
    },
    lastArticle: {},
    nextArticle: {}
  };
  componentDidMount() {
    let articleId = this.props.match.params.id;
    this.http(articleId);
  }
  componentWillReceiveProps(nextProps) {
    // console.log("-----",nextProps)
    this.http(nextProps.match.params.id);
  }
  async http(articleId) {
    let Info = await showArticle(articleId);
    this.setState({
      article: Info[0],
      lastArticle: Info[1],
      nextArticle: Info[2]
    });
  }
  render() {
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
          <Row>
            <Col xs={{ span: 1 }} lg={{ span: 3 }} />
            <Col xs={{ span: 22 }} lg={{ span: 18 }}>
              <div className="article-link">
                <Link to="/main">
                  <Icon type="left" />
                  Go Back
                </Link>
              </div>
            </Col>
            <Col xs={{ span: 1 }} lg={{ span: 3 }} />
          </Row>
          <Divider style={{ margin: 0 }} />
        </Affix>
        <ArticleStyle
          title={this.state.article.title}
          content={this.state.article.content}
          user={this.state.article.user}
          time={new Time(this.state.article.time, "YYY.MM.DD", ".").getTime()}
        />
        {/* footer */}
        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <Divider style={{ margin: 0 }} />
          <Row>
            <Col xs={{ span: 1 }} lg={{ span: 5 }} />
            <Col xs={{ span: 22 }} lg={{ span: 14 }}>
              <div className="footer">
                {this.state.lastArticle.id ? (
                  <Link to={"/article/" + this.state.lastArticle.id}>
                    <Icon type="left" />
                    {this.state.lastArticle.title}
                  </Link>
                ) : (
                  // 给个空 div 占位
                  <div />
                )}
                {this.state.nextArticle.id ? (
                  <Link to={"/article/" + this.state.nextArticle.id}>
                    {this.state.nextArticle.title}
                    <Icon type="right" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </Col>
            <Col xs={{ span: 1 }} lg={{ span: 5 }} />
          </Row>
        </div>
      </div>
    );
  }
}
export default Article;
