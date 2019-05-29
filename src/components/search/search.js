import React from "react";
import { Input, Icon, Popover, Form } from "antd";
import { search } from "../../method";
import {url} from "../../utils";
const FormItem = Form.Item;
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      searchContent: []
    };
  }

  showSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  validator = async (rule, value, callback) => {
    if (!value) {
      callback("输入要搜索的文字");
      return false;
    }

    let content = await search(value);
    this.setState({
      searchContent: content
    });
    callback();
  };
  handleEnter = () => {
    let keywords = this.props.form.getFieldValue("title");
    url("search",keywords);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return this.props.visiable ? (
      // 蜜汁bug FormItem 必须写在Popover 外面 否则点击Input组件 不会触发Popover
      <FormItem>
        <Popover
          placement="bottom"
          title="搜索结果"
          content={this.state.searchContent.map((value, index) => (
            <div key={index}>
              <a href={`/#/article/${value.id}`}>{value.title}</a>
              <br />
            </div>
          ))}
          trigger="click"
        >
          {getFieldDecorator("title", {
            rules: [
              {
                validator: this.validator
              }
            ]
          })(
            <Input
              prefix={<Icon type="search" onClick={this.handleEnter} />}
              size="large"
              placeholder="搜索"
              suffix={<Icon type="close" onClick={() => this.props.close()} />}
              onPressEnter={this.handleEnter}
            />
          )}
        </Popover>
      </FormItem>
    ) : (
      <div />
    );
  }
}
const SearchForm = Form.create({ name: "searchform" })(Search);
export default SearchForm;
