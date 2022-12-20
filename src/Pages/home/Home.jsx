import SideBar from '../../Components/SideBar/SideBar'
import Navbar from '../../Components/Navbar/Navbar'
import './home.scss'
import Widgets from '../../Components/widgets/Widgets'
import Featured from '../../Components/FeaturedChart/Featured'
import NChart from '../../Components/NormalChart/NChart'
import List from '../../Components/Table/Table'

export default function Home() {
  return (
    <div className='home'>
      <SideBar/>
      <div className="homeContainer">
        <Navbar/>
      <div className="widgets">
        <Widgets type="users"/>
        <Widgets type="orders"/>
        <Widgets type="earnings"/>
        <Widgets type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <NChart aspect={2/1} title={"Last 7 Months (Revenue)"}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <List/>
      </div>
      </div>

    </div>
  )
}
