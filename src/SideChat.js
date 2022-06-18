import React, {useState, useEffect} from 'react'
import './SideChat.css'
import { Avatar } from '@mui/material';

function SideChat({ addNewChat }) {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));        
  }, []);

  const createChat = ()=>{
    const roomname = prompt('Please Enter the Name for Chat')

    if(roomname){
      // Database Stuff
    }
  }

  return !addNewChat ? (
    <div className='sidechat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidechatinfo'>
          <h2>Room Name</h2>
          <p>Last Message...</p>
        </div>
    </div>
  )
  :
  (
    <div onClick={createChat} className='sidechat'>
      <h2>Add New Chat</h2>
    </div>
  )
}

export default SideChat