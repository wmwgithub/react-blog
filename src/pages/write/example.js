import React from 'react'
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/index.css'
import { Form, Input, Button ,Row,Col,Icon,message} from 'antd'
import Http from '../../method/http';
const formItemLayout={
  labelCol:{
    xs:{span:6},
    lg:{span:2,offset:3}
  },
  wrapperCol:{
    xs:{span:18},
    lg:{span:16}
  }
}

const FormItem = Form.Item
class Editor extends React.Component{
  submitText=(event)=>{
   this.props.form.validateFieldsAndScroll((err,values)=>{

     if(err){
       message.error(err.userName.errors[0].message)
       return 0
     }
     Http.write(values.userName,values.password).then((res)=>{
        if(res){
          window.history.back(-1)
        }
     })
   })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        {/* <Row>
          <Col xs={{span:1}} lg={{span:3}}></Col>
          <Col xs={{span:22}} lg={{span:18}}>
          </Col>
          <Col xs={{span:1}} lg={{span:3}}></Col>
        </Row> */}
        {/* <Form layout='inline'>水平按钮 */}
        <Form layout='horizontal'>
        {/* 默认值是垂直按钮 */}
          <FormItem {...formItemLayout} label='用户名' >
            {getFieldDecorator('userName',{
              rules:[{required:true,message:"用户名不能为空",max:15}]
              //校验规则，object[]
            })(
              <Input prefix={<Icon type="user" />} placeholder="Username" />              
            )}
          </FormItem>
          <FormItem label='密码' {...formItemLayout}>
            {getFieldDecorator('password',{})(
              <Input prefix={<Icon type="lock"  />} type="password" placeholder="Password" />              
            )}
          </FormItem>
          <FormItem >
              <Row>
                <Col span={18}></Col>
                <Col span={6}>
                <Button type='primary' onClick={this.submitText}>提交</Button>
                </Col>
              </Row>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const Write=Form.create({name:'editor'})(Editor)
// {name:'editor'}可省略
export default Write