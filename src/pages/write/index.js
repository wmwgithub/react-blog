import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Form, Input, Button ,Row,Col,message} from 'antd'
import Http from '../../method/http';
import {Link} from 'react-router-dom'
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
    editorHeight:height,
    title:''
  }
  componentWillMount(){
    let search=this.props.location.search
    if(search){
      let rg=/=+(\w)*/ig
      search=search.match(rg)
      let [userid,index] =[search[0].split("=")[1],search[1].split('=')[1]]
      Http.acticleInfo(userid,index).then((res)=>{
        // console.log(res)
        this.setState({
          title:res.title,
        })
        this.props.form.setFieldsValue({
          'title':res.title,
        })
        this.props.form.setFieldsValue({
          'mainText':BraftEditor.createEditorState(res.text)
        })
      })
    }
  }
  handleChange = (editorState) => {
    this.setState({ editorState })
  }
  validateTitle=(rule,value,callback)=>{
    if(!value){
      callback('标题长度不能为空')
    }else if(value.length>20){
      callback('标题长度不超过20个字')
    }else{
      this.setState({title:value})
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
     let text=values.mainText.toHTML()
    //  console.log(values.title)
    //  console.log(text)
     Http.write(values.title,text).then((res)=>{
        if(res){
          window.history.back(-1)
        }
     })
   })
  }
  preview = () => {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
    window.previewWindow.document.close()

  }

  buildPreviewHtml () {

    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">
          <h1>${this.state.title}</h1>
          <br/>
          ${this.state.editorState.toHTML()}
          </div>
        </body>
      </html>
    `
  }
  
  render(){
    const { getFieldDecorator } = this.props.form;
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        // text: <Link to={{pathname:'/write/preview/'+`${this.state.title}/${this.state.editorState.toHTML()}`}} target="_blank">预览</Link>,
        text:'预览',
        onClick:this.preview
      }
    ]
    return(
      <div>
        <Form layout='horizontal'>
          <FormItem {...formItemLayout} label='文章标题' >
            {getFieldDecorator('title',{
              rules:[{
                required:true,
              },{
                validator:this.validateTitle
              }]
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
              onChange={this.handleChange}
              excludeControls={['media']}
              extendControls={extendControls}
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