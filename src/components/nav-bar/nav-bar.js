import React from 'react'
//似乎可以不用引入React antd 框架里面似乎已经引入了
import {Menu,Icon,Row,Col,Avatar,Dropdown} from 'antd'
import './nav-bar.less'
const MenuItem=Menu.Item
const menu=(
	<Menu>
		<MenuItem>
			<h4>文章分类</h4>
		</MenuItem>
		<MenuItem>
			<a href='#'>第一类</a>
		</MenuItem>
		<MenuItem>
			<a href='#'>第二类</a>
		</MenuItem>
		<MenuItem>
			<a href='#'>第三类</a>
		</MenuItem>
	</Menu>
)
class TopNavBar extends React.Component{
  render(){
    return(
				<Row align='middle' className='NavBar' type='flex'>
					<Col xs={{span:1}} lg={{span:3}}></Col>
					<Col xs={{span:22}} lg={{span:18}}>
						<Row type="flex" justify="space-between">
							<Dropdown overlay={menu} placement='bottomLeft'>
							<Icon type="bars" className='IconSize'/>
							</Dropdown>
							<div>
								<Icon type='search' className='IconColor' />
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='AvatarStyle'/>
							</div>
						</Row>
					</Col>
					<Col xs={{span:1}} lg={{span:3}}></Col>
				</Row>
      )
    }
}
export default TopNavBar