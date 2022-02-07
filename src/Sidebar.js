import './Sidebar.css'
import { Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='side_header'>
        <Avatar />
        <div className='side_icons_right'>
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className='side_search'>

      </div>
      <div className='side_chats'>

      </div>
    </div>
  );
}

export default Sidebar;