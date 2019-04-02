import React from 'react'
import{Card,Row,Col} from 'antd'
import UserCard from '../main/user-card/user-card'
import '../main/user-card/user-card.less'
import Background from '../main/background/index'
import '../main/background/index.less'
import Http from '../../method/http'
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
      <Background singnature='love code & positive' name='琅琊旻M'></Background>
      <Row>
        <Col xs={{span:1}} lg={{span:3}}></Col>
        <Col xs={{span:22}} lg={{span:18}}>
        <UserCard imgSrc='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' userName='琅琊旻M' 
            userSingnature='love code & positive'/>
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