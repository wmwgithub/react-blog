import React from 'react'
import {ArticleTable} from '../../components/'
export default class ManageActicle extends React.Component{
  render(){
    return(
      <div style={{margin:"20px"}}>
        <h1 >文章管理</h1>
        <ArticleTable/>
      </div>
    )
  }

}