import React from 'react'
import Http from '../../method/http'
import{Card,Row,Col} from 'antd'
import {Jumbotron,UserCard} from '../main'
import '../main/jumbotron/index.less'
import '../main/user-card/index.less'

export default class ActicleInfo extends React.Component{
  state={
    acticle:{}
  }
  componentWillMount(){
    let search=this.props.location.search
    // console.log(search)
    let rg=/=+(\w)*/ig
    search=search.match(rg)
   let [userid,index] =[search[0].split("=")[1],search[1].split('=')[1]]
   Http.acticleInfo(userid,index).then((res)=>{
     this.setState({acticle:res})
   })
  }
  render(){
    return(
      <div>
      <Jumbotron singnature='love code & positive' name='琅琊旻M' />
      <Row>
        <Col xs={{span:1}} lg={{span:3}}></Col>
        <Col xs={{span:22}} lg={{span:18}}>
        <UserCard />
        <Card title={this.state.acticle.title}>
          <div dangerouslySetInnerHTML={{__html:this.state.acticle.text}} />
          <br/>
          <p style={{float:'right'}}>{this.state.acticle.date}</p>
        </Card>
      </Col>
      <Col xs={{span:1}} lg={{span:3}}></Col>
      </Row>
      </div>
    )
  }
}
