import React from 'react'
//似乎可以不用引入React antd 框架里面似乎已经引入了
import {Menu,Icon,Row,Col,Avatar,Dropdown,Input,Popover} from 'antd'
import './nav-bar.less'
import Http from '../../../method/http';
const MenuItem=Menu.Item
class TopNavBar extends React.Component{
	state={
		display:'none',
		content:[]
	}
	showSearch=()=>{
		this.setState({
			display:true
		})
	}
	handleSearch=()=>{
		Http.search('2017213893','文章标题').then((res)=>{
			console.log(res)
			this.setState({
				content:res
			})
		})
	}
	componentWillUnmount(){
		this.setState({
			display:'none'
		})
	}
	handleType=(type)=>{
		console.log(type)
		// ActicleCard.callbackFun()
	}
  render(){
		const menu=(
			<Menu>
				<MenuItem>
					<h4>文章分类</h4>
				</MenuItem>
				<MenuItem>
					<p onClick={()=>{this.handleType(1)}}>第一类</p>
				</MenuItem>
				<MenuItem>
					<p onClick={()=>{this.handleType(2)}}>第二类</p>
				</MenuItem>
				<MenuItem>
					<p onClick={()=>{this.handleType(3)}}> 第三类</p>		
				</MenuItem>
			</Menu>
		)
		const avatarContent=(
			<div>
				<a href="/#/setting"><Icon type="setting" />资料设置</a>
				<br/>
				<a href="/#/login"><Icon type="logout" />退出登录</a>
			</div>
		)
    return(
				<Row className='NavBar' align='middle' gutter={16}>
					<Col xs={{span:1}} lg={{span:3}}></Col>
					<Col xs={{span:3}} lg={{span:1}}>
						<Dropdown overlay={menu} placement='bottomLeft'>
						<Icon type="bars" className='IconSize'/>
						</Dropdown>
					</Col>
					<Col xs={{span:14}} lg={{span:15}}>
						<Popover placement="bottom" title='搜索结果' content={this.state.content.map((value)=><div key={value.id}><a href={`/#/acticle/?userid='userid'&index=${value.id}`}>{value.title}</a><br/></div>)} trigger="click">
						<Input  placeholder='搜索' style={{display:this.state.display}} onChange={this.handleSearch}/>
						</Popover>
					</Col>
					<Col xs={{span:6}} lg={{span:2}}>
						<Icon type='search' className='IconColor'  onClick={this.showSearch}  />
						<Popover placement="bottom" content={avatarContent} trigger="click">
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='AvatarStyle'/>						
						</Popover>
					</Col>
					<Col xs={{span:1}} lg={{span:3}}></Col>
				</Row>
      )
    }
}
export default TopNavBar