import './sidebar.scss'
import {MdDashboard,MdStore,MdCreditCard,MdHealthAndSafety,MdManageAccounts,MdSettingsSuggest,MdLogout} from 'react-icons/md'
import {FaRegUser,FaTruck,FaChartBar,FaRegBell,FaRegUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../theme/Theme'
import { useContext } from 'react'

export default function SideBar({}) {
    const {dispatch} = useContext(ThemeContext)
    
  return (
    <div className='sidebar'>
        <div className='sidebar-logo'>
            <Link to="/"><span className="logo">TAnveerKHan</span></Link>
        </div>
    <hr />
        <div className='sidebar-center'> 
        <ul>
            <p className='title'>Main</p>
            <Link to="/"><li><MdDashboard/><span>Dashboard</span></li></Link>

            <p className='title'> Lists</p>
           
            <Link to="/users"><li><FaRegUser/><span>Users</span></li></Link>

            <Link to="/products/new"><li><MdStore/><span>Products</span></li></Link>
            <Link to="/users/new"><li><MdCreditCard/><span>orders</span></li></Link>
            <Link to="/users"><li><FaTruck/><span>Delivery</span></li></Link>
            <p className='title'>UseFul</p>
            <li><FaChartBar/><span>Stats</span></li>
            <li><FaRegBell/><span>Notifications</span></li>
            <p className='title'>services</p>
            <li><MdHealthAndSafety/><span>Systems Health</span></li>
            <li><MdManageAccounts/><span>Logs</span></li>
            <li><MdSettingsSuggest/><span>Settings</span></li>
            <p className='title'>User</p>
            <li><FaRegUserCircle/><span>Profile</span></li>
            <li><MdLogout/><span>LogOut</span></li>
            <li><span></span></li>
        </ul>
        </div>
        <div className="sidebar-thememode">
            <h5>Theme</h5>
            <div className='colorOptions' onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className='colorOptions' onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
  )
}
