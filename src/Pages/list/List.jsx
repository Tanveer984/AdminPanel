import DataTable from '../../Components/DataTable/DataTable'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'

import'./list.scss'

export default function List() {
  return (
    <div className='list'>
      <SideBar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
      </div>
  )
}
