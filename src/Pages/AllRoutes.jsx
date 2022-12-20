import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import List from './list/List'
import SingleProduct from './single/SingleProduct'
import New from './new/New'
import {userInputs,productInputs} from '../formdatabase'


export default function AllRoutes() {
    
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/users' element={<List/>}/>
            <Route path ="/users/:id" element={<SingleProduct/>}/>
            <Route path="/users/new" element={<New inputs={userInputs} title={"Add New user"}/>}/>
            <Route path='/products' element={<List  />}/>
            <Route path ="/products/:productid" element={<SingleProduct/>}/>
            <Route path="/products/new" element={<New  inputs={productInputs} title={"Add New Product"}/>}/>
        </Routes>

    </div>
  )
}
