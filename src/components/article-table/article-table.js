import React from "react";
import { Table, Popconfirm, Button } from "antd";
import { lists, total } from "../../../method/get-mapping";
import { deleteArticle } from "../../method";
import Time from "../../utils/time";
import "./index.less";
class ArticleTable extends React.Component {
  state = {
    current: 1,
    total: 0,
    data: [],
    columns: [
      {
        key: "id",
        title: "文章id",
        dataIndex: "id",
        width: 100
      },
      {
        key: "title",
        title: "文章标题",
        dataIndex: "title"
      },
      {
        key: "date",
        title: "文章时间",
        width: 150,
        /**
         * 秀一波es6操作 {time} 结构赋值 传进来的是包含time的一个对象 我们只需要time 进行结构赋值
         * =>箭头函数 代码只有一行时候直接返回其值
         */
        render: ({ time }) => new Time(time, "YYY-MM-DD", "-").getTime()
      },
      {
        key: "editor",
        title: "编辑文章",
        width: 150,
        render: data => {
          return (
            <Button type="primary">
              <a href={`/#/write?userid=userid&index=${data.id}`}>编辑</a>
            </Button>
          );
        }
      },
      {
        key: "delete",
        title: "删除文章",
        width: 150,
        render: data => {
          return (
            <Popconfirm
              placement="topLeft"
              title={`是否删除文章:${data.title}`}
              onConfirm={() => this.handleDelete(data.id)}
              okText="删除"
              cancelText="不删了"
            >
              <Button type="danger">删除</Button>
            </Popconfirm>
          );
        }
      }
    ]
  };
  async request(page, pageSize) {
    let article = await lists(page, pageSize);
    let totalArticle = await total();
    this.setState({
      data: article,
      total: totalArticle
    });
  }
  componentWillMount() {
    this.request(1, 5);
  }
  handleDelete = async id => {
    let rseult = await deleteArticle(id);
    if (rseult) {
      this.request(this.state.current, 5);
    }
  };
  handleChange = ({ current, pageSize }) => {
    this.setState({
      current: current
    });
    this.request(current, pageSize);
  };

  render() {
    return (
      <Table
        columns={this.state.columns}
        dataSource={this.state.data}
        bordered
        scroll={{ y: 300, x: 700 }}
        onChange={this.handleChange}
        pagination={{
          total: this.state.total,
          pageSize: 5,
          current: this.state.current
        }}
      />
    );
  }
}
export default ArticleTable;
