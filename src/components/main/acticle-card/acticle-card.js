import React from 'react'
import {Card ,Pagination,Rate} from 'antd'
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
  static callbackFun=()=>{
    this.httpMethod(false)
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
  handleShowActicle=(userid,index)=>{
    // window.open(`/#/acticle/${userid}/${index}`)
    window.open(`/#/acticle/?userid=${userid}&index=${index}`)
    // window.open(`/#/acticle/`)

  }
  HandleStopPropagation=(event)=>{
    console.log('star on change')
  }
  render(){
    return(
      <div>
        {
          this.state.acticleArray.map((value,index)=>        
          <Card  className='acticleCard' title={`${index+1}. ${value.title} `} extra={<Rate count={1} onChange={this.HandleStopPropagation}/>} key={`ActicleCard${index}`} >
            <div onClick={()=>this.handleShowActicle('userid',value.id)}>
              <p className='text'>{value.text}</p>
              <br/>
              <p className='time'>{value.date}</p>
            </div>
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