import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Form, Input, Button ,Row,Col,Icon,message} from 'antd'
import Http from '../../method/http';
import './index.less'
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
let height = window.screen.availHeight/2.0
class Editor extends React.Component{
  state={
    editorState: BraftEditor.createEditorState(null),
    editorHeight:height
  }
  validateTitle=(rule,value,callback)=>{
    if(!value){
      callback('标题长度不能为空')
    }else if(value.length>15){
      callback('标题长度不超过15个字')
    }else{
      callback()
    }
  }
  submitText=(event)=>{
   this.props.form.validateFieldsAndScroll((err,values)=>{
     if(err){
       message.error(err.title.errors[0].message)
       return 0
     }
    // console.log(values.mainText)
     let text=values.mainText.toRAW()
    //  console.log(values.title)
    //  console.log(text)
     Http.write(values.title,text).then((res)=>{
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
          <FormItem {...formItemLayout} label='文章标题' >
            {getFieldDecorator('title',{
              rules:[{
                required:true,
              },{
                validator:this.validateTitle
              }]
              //校验规则,object[]
            })(
              <Input  placeholder="文章标题......" />              
            )}
          </FormItem>
          <FormItem label='文章正文' {...formItemLayout}>
            {getFieldDecorator('mainText',{
              rules:[{
                required:true,
              }]
            })(
              <BraftEditor className='editorStyle' placeholder="请输入正文内容"  
              contentStyle={{height: this.state.editorHeight, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
              excludeControls={['media']}
              />      
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