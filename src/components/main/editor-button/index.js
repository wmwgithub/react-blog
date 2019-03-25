import React from 'react'
import {Button,Icon} from 'antd'
import {Link} from 'react-router-dom'
class EditorButton extends React.Component{
  render(){
    return (
      <div>
        <Button>
          <Icon type='tool' />管理文章
        </Button>
        <div style={{display:'inline-block',width:'10px'}}></div>
        {/* <Button> */}
          {/* <Icon type='edit' />添加文章 */}
        {/* </Button> */}
        <Link to="/write">
          <Button><Icon type='edit' />添加文章</Button>
        </Link>
      </div>
    )
  }
}
export default EditorButton