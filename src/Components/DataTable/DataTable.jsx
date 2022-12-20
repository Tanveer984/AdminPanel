import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../Datasource';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function DataTable() {

const actionCol=[
  {field:"action",headerName:"Action",width:200,renderCell:(params)=>
<div className='colAction'>
 <Link to="/users/test"><Button variant='outlined' size='small'>view</Button></Link>
 <Link to="#"><Button variant='outlined' size='small' color="error" onClick={()=>setData(data.filter(item=>item.id!==params.row.id))} >Delete</Button></Link>
</div>
}
]
   const [data,setData] = useState(userRows)
   

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        <p>All Users</p>
        <Link to='/users/new'><Button variant="outlined" color='success'> Add New User</Button></Link>
      </div>

    <div style={{ height:400, width: '100%' }}>
      <DataGrid
      className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionCol)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  </div>
  )
}
