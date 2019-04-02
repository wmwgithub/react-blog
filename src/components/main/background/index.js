import React from 'react';
import {Row,Col} from 'antd'
import './index.less'
class Background extends React.Component{
	render(){
		return (
			<div className='userBox'>
				<Row>
					<Col xs={{span:1}} lg={{span:3}}></Col>
					<Col xs={{span:22}} lg={{span:18}}>
            <div className='userBox'>
						<div className='userInfo'>
              <div className='singnature'>
              {/* 个性签名 */}
              {this.props.singnature}
              </div>
              <div className='userName'>
              {this.props.name}
              </div>
            </div>
            </div>
					</Col>
					<Col xs={{span:1}} lg={{span:3}}></Col>
				</Row>
			</div>
		)
	}
}
export default Background