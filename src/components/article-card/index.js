import React from "react";
import { Card, Pagination, Rate } from "antd";
import "./index.less";
import { lists, total } from "../../method";
import {Time} from "../../utils";
import {url} from "../../utils";
class ActicleCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      acticleArray: [],
      total: 1
    };
  }
  componentDidMount() {
    this.getLists(1, 5);
  }
  /**
   *
   * @param {当前页数默认第1页} page
   */
  async getLists(page, pageSize) {
    let totalArticle = await total();
    let articlelists = await lists(page, pageSize);
    this.setState({
      acticleArray: articlelists,
      total: totalArticle
    });
  }
  handleOnChange = (page, pageSize) => {
    this.getLists(page, pageSize);
  };
  handleShowActicle = articleId => {
    url("article", articleId);
  };
  handleStopPropagation = event => {
    console.log("star on change");
  };
  star(count) {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", lineHeight: "40px" }}
      >
        <Rate
          count={1}
          onChange={this.handleStopPropagation}
          defaultValue={1}
        />
        <p>{count}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.acticleArray.map((value, index) => (
          <Card
            className="acticleCard"
            title={value.title}
            extra={this.star(value.star)}
            key={`ActicleCard${index}`}
          >
            <div onClick={() => this.handleShowActicle(value.id)}>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: value.content }}
              />
              <br />
              <p className="time">
                {new Time(value.time, "YYY.MM.DD", ".").getTime()}
              </p>
            </div>
          </Card>
        ))}
        {this.props.showPagination ? (
          <div className="bottomPage">
            <Pagination
              defaultCurrent={1}
              total={this.state.total}
              defaultPageSize={5}
              onChange={this.handleOnChange}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ActicleCard;
