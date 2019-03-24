import React from 'react'
import {Card ,Icon,Pagination} from 'antd'
import './acticle-card.less'
import Http from '../../../method/http.js'
class ActicleCard extends React.Component{
  constructor(props,context){
    super(props,context)
    this.state={
      acticleArray:[],
      total:1,
    }
  }
  httpMethod(showMsg){
    Http.getActicle(showMsg).then((res)=>{
      // console.log(res)
      this.setState({
        acticleArray:res
      })
    })
    Http.totalActicle().then((res)=>{
      this.setState({
        total:res
      })
    })
  }
  componentWillMount(){
    this.httpMethod(true)
  }
  HandlerOnChange=(page,PageSize)=>{
    this.httpMethod(false)
  }
  render(){
    return(
      <div>
        {
          this.state.acticleArray.map((value,index)=>        
          <Card className='acticleCard' title={`${index+1}. ${value.title} `} extra={<Icon type='bell' theme='twoTone' />} key={`ActicleCard${index}`} >
          <p className='text'>{value.text}</p>
          <p className='time'>{value.data}</p>
         </Card>)
        }
        <div className='bottomPage'>
        <Pagination defaultCurrent={1} total={this.state.total} defaultPageSize={10}
         onChange={()=>this.HandlerOnChange()} />
        </div>   
      </div>
    )
  }
}

export default ActicleCard