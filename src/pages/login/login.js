import React from "react";
import "./login.less";
import { Form, Input, Button, Modal } from "antd";
import { login } from "../../method";
const FormItem = Form.Item;
class LoginForm extends React.Component {
  componentWillMount() {
    if (document.cookie) {
      window.location.href = window.location.origin + "/#/main";
      return;
    }
    window.location.href = window.location.origin + "/#/login";
  }
  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login("/login", values);
      }
    });
    e.preventDefault();
    // return false
  };
  validator = (rule, value, callback) => {
    /**
     *这边真的很坑callback 必须被调用 没错也要不传参数调用
     */
    let reg = /[a-zA-Z]*[0-9]*[a-zA-Z]*/;
    if (!value) {
      callback("用户名密码不能为空");
      return 0;
    }
    if (reg.exec(value)[0] !== value) {
      callback("用户名和密码只能包含字母数字");
    }
    callback();
  };
  handleRgeister = () => {
    this.props.form.validateFields((err, values) => {
      console.log("register", values);
      if (!err) {
        Modal.confirm({
          title: "用户协议",
          content:
            "1.我们不会记住你的用户名和密码并且没有找回密码的服务，所以请你自己牢记2.同意公开所有你写的文章",
          okText: "同意",
          cancelText: "拒绝",
          onOk: () => {
            this.okRgeister(values);
          }
        });
      }
    });
  };
  okRgeister = values => login("/register", values);
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  validator: this.validator
                }
              ]
            })(
              <Input
                style={{ color: "rgba(0,0,0,0.25)" }}
                placeholder="用户名"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                {
                  validator: this.validator
                }
              ]
            })(
              <Input style={{ color: "rgba(0,0,0,0.25)" }} placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="button">
              登录
            </Button>
            <br />
            <Button
              type="default"
              className="button"
              onClick={this.handleRgeister}
            >
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const Login = Form.create({ name: "login" })(LoginForm);

export default Login;
