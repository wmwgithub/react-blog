import React from 'react';
import './user-card.less'
class UserCard extends React.Component{
  render(){
		return(
			<div className='userCard'>
				<img  src={this.props.imgSrc}>
				</img>
				<div className='cardText'>
					<div className='cardUserName'>
					{this.props.userName}
					</div>
					<div className='userSingnature'>
					{this.props.userSingnature}
					</div>
				</div>
			</div>
		)
	}
}
export default UserCard