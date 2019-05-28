import React from 'react';
import './index.less'
function UserCard(props){
  return(
    <div className='userCard'>
      <img  src={props.avatar} style={{marginRight:"20px"}}>
      </img>
      <div className='cardText'>
        <div className='cardUserName'>
        {props.name}
        </div>
        <div className='userSingnature'>
        {props.signature}
        </div>
      </div>
    </div>
  )
}
export default  UserCard