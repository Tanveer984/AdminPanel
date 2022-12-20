import  './navbar.scss'
import {MdOutlineSearch,MdOutlineLanguage,MdOutlineFullscreenExit,
  MdNotificationsNone,MdOutlineChatBubbleOutline,MdOutlineList,
  MdOutlineDarkMode} from 'react-icons/md'
  import avatar from '../../images/avatar.jpg'
import { useContext } from 'react'
import { ThemeContext } from '../../theme/Theme'

export default function Navbar() {
  const {dispatch} = useContext(ThemeContext)
  return (
    <div className='navBar'>
        <div className='searchbar'>
          <div className='navInputAndButton'>
            <input type="text" name="" id="" placeholder='Search...' />
            <MdOutlineSearch className='searchIcon'/>
          </div>
          
        </div>
        <div className='navIcons'>
          <div className="item"><MdOutlineLanguage className='icon'/><span>EN</span></div>
          <div className="item"><MdOutlineDarkMode className='icon' style={{cursor:"pointer"}} onClick={()=>dispatch({type:"TOGGLE"})}/></div>
          <div className="item"><MdOutlineFullscreenExit className='icon'/></div>
          <div className="item">
            <MdNotificationsNone className='icon'/>
            <div className="counter">1</div>
            </div>
          <div className="item">
            <MdOutlineChatBubbleOutline className='icon'/>
            <div className="counter">10</div>

            </div>
          <div className="item"><MdOutlineList className='icon'/></div>
          <div className="item"><img src={avatar} alt="TanveerKhan" /></div>

        

        </div>
        
        </div>
  )
}
