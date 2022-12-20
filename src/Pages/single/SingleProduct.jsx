import'./single.scss';
import {MdOutlineModeEdit} from 'react-icons/md'
import SideBar from '../../Components/SideBar/SideBar'
import Navbar from '../../Components/Navbar/Navbar'
import NChart from '../../Components/NormalChart/NChart'
import profile from '../../images/profile.jpg'
import List from '../../Components/Table/Table';

export default function SingleProduct() {
  return (
    <div className='singleproduct'>
    <SideBar/>
      <div className="singlecontainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <h4 className='title'>User Infromation</h4>
            <MdOutlineModeEdit className='Editbutton'/>
            <p className='Editbuttondisplay'>edit</p>
            <div className="item">
              <img src={profile} alt="profile" className='itemImg'/>
              <div className="details">
                <h3 className="itemName">First Customer</h3>
                <div className="itemdetails">
                  <div className="itemkey">email:</div>
                  <div className="itemvalue">airbnb@gmail.com</div>
                </div>
                <div className="itemdetails">
                  <div className="itemkey">PHONE:</div>
                  <div className="itemvalue">+91 8750,556,085</div>
                </div>
                <div className="itemdetails">
                  <div className="itemkey">Address:</div>
                  <div className="itemvalue">34,sansad Road , New Delhi-110001</div>
                </div>
                <div className="itemdetails">
                  <div className="itemkey">Country:</div>
                  <div className="itemvalue">India</div>
                </div>
              </div>
            </div>
          
          
          </div>
          <div className="right">
            <NChart aspect={3/1} title={"user spending in last(6 Months)"}/>
          </div>
        </div>
        <div className="bottom">
          <List/>
        </div>
      </div>
 
    </div>
  )
}
