import React from 'react'
import {Table,Popconfirm,Button,Link} from 'antd'
import Http from  '../../../method/http'
import './acticletable.less'
class ActicleTable extends React.Component{
  state={
    data:[],
    columns:[{
      key:'id',
      title:'文章id',
      dataIndex:'id',
      width:100,
      fixed:'left'
    },{
      key:'title',
      title:'文章标题' ,
      dataIndex:'title',
      width:300      
    },{
      key:'date',
      title:'文章时间',
      dataIndex:'date',
      width:150
    },{
      key:'editor',
      title:'编辑文章',
      render:(data)=>{
        return  <Button type='primary'><a href={`/#/write?userid=userid&index=${data.id}`}>编辑</a></Button>
      },
      width:100
    },{
      key:'delete',
      title:'删除文章',
      render:(data)=>{
        // console.log(data)
        return  <Popconfirm placement="topLeft" title={`是否删除文章:${data.title}`} onConfirm={()=>this.handleDelete(data.id)} okText="删除" cancelText="不删了">
                  <Button type='danger'>删除</Button>
                </Popconfirm>
      },
      fixed:'right',
      width:100
    }]
  }
  request(){
    Http.allActicle('uaerid').then((res)=>{
      this.setState({
        data:res
      })        
    })
  }
  componentWillMount(){
    this.request()
  }
  handleDelete=(id)=>{
    console.log(`删除文章${id}`)
    this.request()
  }
  render(){
    return(
      <Table style={{padding:'0px'}} columns={this.state.columns} dataSource={this.state.data} bordered scroll={{x:750,y:300}} className='acticleTable'/>
    )
  } 
}
export default ActicleTable