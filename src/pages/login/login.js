import React from 'react'
import './login.less'
import { Form, Input, Button} from 'antd';
import { login } from '../../method/post-mapping';
const FormItem=Form.Item
class LoginForm extends React.Component{
  componentWillMount(){
    if(document.cookie){
    window.location.href=window.location.origin+"/#/main"
      return ;
    }
    window.location.href=window.location.origin+"/#/login"
  }
  handleSubmit=(e)=>{
    this.props.form.validateFields(async (err,values)=>{
      if(!err){
        let loginResutl=await login('/login',values);
        if(loginResutl){
          window.location.replace(window.location.origin+"/#/main")
          window.location.reload()
        }
      }
    })
    e.preventDefault()
    // return false
  }
    validator=(rule,value,callback)=>{
      /**
       *这边真的很坑callback 必须被调用 没错也要不传参数调用
       */
      let reg=/[0-9]*[a-zA-Z]*/
      if(!value){
        callback("用户名密码不能为空")
        return 0
      }
       if(reg.exec(value)[0] !== value){
         callback("用户名和密码只能包含字母数字")
       }
      callback();
    }
  render(){
      const {getFieldDecorator}= this.props.form
      return(
        <div className ="login">
          <Form onSubmit={this.handleSubmit} className="form">
            <FormItem>
              {
                getFieldDecorator('username',{
                  rules:[{
                    validator:this.validator
                  }]
                })(
                  <Input  style={{color:'rgba(0,0,0,0.25)'}} placeholder="用户名"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password',{
                  rules:[{
                  validator:this.validator
                  }]
                })(
                  <Input style={{color:'rgba(0,0,0,0.25)'}} placeholder="密码"/>
                )
              }
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit" className="button">
              登录
            </Button>
            <br/>
            <Button type="default"   className="button">
              注册
            </Button>
            </FormItem>
          </Form>

        </div>
      )
  }
}
const Login=Form.create({name:"login"})(LoginForm)

export default Login