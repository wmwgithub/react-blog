import React, { Component } from 'react';
import {Row,Col} from 'antd';
import TopNavBar from './components/nav-bar/nav-bar.js'
import Background from './components/main/background'
import UserCard from './components/main/user-card.js/user-card.js'
import EditorButton from './components/main/editor-button'
import ActicleCard from './components/main/acticle-card/acticle-card.js'
import './pages/main/main.less'
class App extends Component {
  render() {
    return (
      <div>
        <header>
        <TopNavBar></TopNavBar>
        </header>
        <Background singnature='love code & positive' name='琅琊旻M'></Background>
        <div style={{height:20}}></div>
        <Row>
          <Col xs={{span:1}} lg={{span:3}}></Col>
          <Col xs={{span:22}} lg={{span:18}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <UserCard imgSrc='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' userName='琅琊旻M' 
          userSingnature='love code & positive'
          />
          <EditorButton />
          </div>
          <div className='blank'></div>
          <ActicleCard/>
          </Col>
          <Col xs={{span:1}} lg={{span:3}}></Col>
        </Row>
      </div>
    );
  }
}
export default App