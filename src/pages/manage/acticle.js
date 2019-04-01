import React from 'react'
import ActicleTable from '../../components/manage/acticle/acticle-table'
export default class ManageActicle extends React.Component{
  render(){
    return(
      <div>
        <h1>文章管理</h1>
        <ActicleTable/>
      </div>
    )
  }

}