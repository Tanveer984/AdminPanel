import'./new.scss'
import SideBar from '../../Components/SideBar/SideBar'
import Navbar from '../../Components/Navbar/Navbar'
import noImage from "../../images/NoImage.jpg"
import {Button} from '@mui/material'
import {MdDriveFolderUpload} from "react-icons/md"
import { useState } from 'react'

export default function New({inputs,title}) {
  const [file, setFile] = useState('')
  console.log("🚀 ~ file: New.jsx ~ line 11 ~ New ~ file", file)
  return (
    <div className=' New'>
      <SideBar/>
      <div className="newcontainer">
        <Navbar/>
      <div className="top">
        <h4>{title}</h4>
      </div>
      <div className="bottom">
        <div className="left">

          <img src={file?URL.createObjectURL(file):noImage} alt="" className='Noimage'/>
        </div>
        <div className="right">
            <form>
            <div className='formInput'>
              <label htmlFor="./file"></label>
              <MdDriveFolderUpload style={{fontSize:"25px"}}/>
              <input type="file" id="file" className='file' onChange={({target})=>setFile(target.files[0])} />
              </div >
              
            {inputs.map(el=>
            <div className="formInput" key={el.id}>
              
              <label htmlFor={el.username}>{el.label}</label>
              <input type={el.text} placeholder={el.placeholder}/>
            </div>
            )}

            {/* <div className="formInput">
              <label htmlFor="">fullName</label>
              <input type="text" placeholder='userFullName'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder='+91 875,060,6684'/>
            </div>
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='example@co.in'/>
            </div>

            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Address</label>
              <input type="text" placeholder='Address'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Country</label>
              <input type="text" placeholder='India'/>
            </div> */}
            <div className='formInput'>
            <Button variant='contained' color='error'  fullWidth >Submit</Button>
            </div>
            </form>
        </div>
      </div>
      </div>
      </div>
  )
}
