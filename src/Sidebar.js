import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { SearchOutlined } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='side_header'>
        <Avatar />
        <div className='side_icons_right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='side_search'>
        <div className='side_searchbar'>
          <SearchOutlined />
          <input placeholder='Search or Start a New Chat' />
        </div>
      </div>
      <div className='side_chats'>

      </div>
    </div>
  );
}

export default Sidebar;