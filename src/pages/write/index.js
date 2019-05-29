import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { Form, Input, Button, Row, Col, message, Radio, Drawer } from "antd";
import { PreviewArticle } from "../../components/";
import "./index.less";
import { write, modify, update } from "../../method";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    lg: { span: 2, offset: 3 }
  },
  wrapperCol: {
    xs: { span: 18 },
    lg: { span: 16 }
  }
};

const FormItem = Form.Item;
let height = window.screen.availHeight / 2.0;
class Editor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null),
    editorHeight: height,
    title: "",
    type: 1,
    drawerVisable: false,
    name: "",
    avatar: "",
    html: ""
  };

  async componentDidMount() {
    if (this.props.match.params.articleId) {
      //判断有没有修改文章的权限
      let articleInfo = await modify(this.props.match.params.articleId);
      console.log(articleInfo);
      this.setState({
        //文章标题
        title: articleInfo.title,
        //文章内容
        editorState: BraftEditor.createEditorState(articleInfo.content),
        //文章类型
        type: articleInfo.type
      });

      this.props.form.setFieldsValue({
        title: articleInfo.title
      });
      this.props.form.setFieldsValue({
        mainText: BraftEditor.createEditorState(articleInfo.content)
      });
    }
    this.setState({
      avatar: cookie.get("avatar"),
      name: cookie.get("name")
    });
  }
  handleChange = editorState => {
    /**
     * 储存富文本编辑器内部值方便预览
     */
    this.setState({ editorState });
  };
  validateTitle = (rule, value, callback) => {
    if (!value) {
      callback("标题长度不能为空");
    } else if (value.length > 20) {
      callback("标题长度不超过20个字");
    } else {
      this.setState({ title: value });
      callback();
    }
  };
  submitText = event => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        message.error(err.title.errors[0].message);
        return 0;
      }
      let text = values.mainText.toHTML();
      //写文章
      write(values.title, values.type, text);
    });
  };
  handleUpdate = event => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        message.error(err.title.errors[0].message);
        return 0;
      }
      let text = values.mainText.toHTML();
      //写文章
      //参数过多建议采用es6结构赋值,这样不需要考虑传参的顺序
      update({
        title: values.title,
        type: values.type,
        content: text,
        articleId: this.props.match.params.articleId
      });
    });
  };
  preview = () => {
    this.setState({
      drawerVisable: !this.state.drawerVisable
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const extendControls = [
      {
        key: "custom-button",
        type: "button",
        text: "预览",
        onClick: this.preview
      }
    ];
    return (
      <div>
        {/* 预览组件 --start*/}
        <Drawer
          width="100%"
          visible={this.state.drawerVisable}
          onClose={this.preview}
          placement="right"
          title="文章预览"
        >
          <PreviewArticle
            title={this.state.title}
            html={this.state.editorState.toHTML()}
            avatar={this.state.avatar}
            name={this.state.name}
          />
        </Drawer>
        {/* 预览组件--end */}
        <Form layout="horizontal">
          <FormItem {...formItemLayout} label="文章标题">
            {getFieldDecorator("title", {
              rules: [
                {
                  validator: this.validateTitle
                }
              ]
            })(<Input placeholder="文章标题......" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="文章类型">
            {getFieldDecorator("type", {
              rules: [
                {
                  required: true
                }
              ],
              initialValue: this.state.type
            })(
              <Radio.Group>
                <Radio value={1}>第一类</Radio>
                <Radio value={2}>第二类</Radio>
                <Radio value={3}>第三类</Radio>
                <Radio value={4}>第四类</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label="文章正文" {...formItemLayout}>
            {getFieldDecorator("mainText", {
              rules: [
                {
                  required: true
                }
              ]
            })(
              <BraftEditor
                className="editorStyle"
                placeholder="请输入正文内容"
                contentStyle={{
                  height: this.state.editorHeight,
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,.1)"
                }}
                onChange={this.handleChange}
                excludeControls={["media"]}
                extendControls={extendControls}
              />
            )}
          </FormItem>
          <FormItem>
            <Row>
              <Col span={18} />
              <Col span={6}>
                {this.props.match.params.articleId ? (
                  <Button type="primary" onClick={this.handleUpdate}>
                    更新
                  </Button>
                ) : (
                  <Button type="primary" onClick={this.submitText}>
                    提交
                  </Button>
                )}
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const Write = Form.create({ name: "editor" })(Editor);
// {name:'editor'}可省略
export default Write;
