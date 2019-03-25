import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Form, Input, Button ,Row,Col,Icon} from 'antd'
const FormItem = Form.Item
class Editor extends React.Component{
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
        <Form layout='inline'>
        {/* 默认值是垂直按钮 */}
          <FormItem label='用户名'>
            {getFieldDecorator('userName',{
              rules:[{required:true}]
            })(
            <Input prefix={<Icon type="user" />} placeholder="Username" />              
            )}
          </FormItem>
          <FormItem label='密码'>
            <Input prefix={<Icon type="lock"  />} type="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>
            登录
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const Write=Form.create({name:'editor'})(Editor)
// {name:'editor'}可省略
export default Write