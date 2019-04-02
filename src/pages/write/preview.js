import React from 'react'
import UserCard from '../../components/main/user-card/user-card'
import {Row,Col,Card} from 'antd'
export default class Preview extends React.Component{
  state={
    title:'',
    text:''
  }
  componentWillMount(){
    let acticle = this.props
    console.log(acticle)
    // console.log(acticle)
    // this.setState({
    //   title:acticle[3],
    //   text:acticle[4]
    // })
  }
  render(){
    const date=new Date()
    return(
      <div>
        <Row>
          <Col xs={{span:1}} lg={{span:3}}></Col>
            <Col xs={{span:22}} lg={{span:18}}>
              <UserCard imgSrc='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' userName='琅琊旻M' 
                  userSingnature='love code & positive'/>
              <Card title={this.state.title}>
                <div dangerouslySetInnerHTML={{__html:this.state.text}} />
                <br/>
                <p style={{float:'right'}}>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</p>
              </Card>
          </Col>
          <Col xs={{span:1}} lg={{span:3}}></Col>
        </Row>
      </div>
    )
  }
}