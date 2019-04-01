import React from 'react'
//似乎可以不用引入React antd 框架里面似乎已经引入了
import {Menu,Icon,Row,Col,Avatar,Dropdown,Input,Popover,Link} from 'antd'
import './nav-bar.less'
import Http from '../../method/http';
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
			this.setState({
				content:res
			})
		})
	}
  render(){
    return(
				<Row className='NavBar' align='middle'>
					<Col xs={{span:1}} lg={{span:3}}></Col>
					<Col xs={{span:3}} lg={{span:1}}>
						<Dropdown overlay={menu} placement='bottomLeft'>
						<Icon type="bars" className='IconSize'/>
						</Dropdown>
					</Col>
					<Col xs={{span:10}} lg={{span:14}}>
						<Popover placement="bottom" title='搜索结果' content={this.state.content.map((value)=><Link to={`/acticle/${value.id}`}></Link>)} trigger="click">
						<Input  placeholder='搜索' style={{display:this.state.display}} onChange={this.handleSearch}/>
						</Popover>
					</Col>
					<Col xs={{span:1}}></Col>
					<Col xs={{span:5}} lg={{span:2}}>
						<Icon type='search' className='IconColor'  onClick={this.showSearch}  />
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='AvatarStyle'/>
					</Col>
					<Col xs={{span:1}} lg={{span:3}}></Col>
				</Row>
      )
    }
}
export default TopNavBar