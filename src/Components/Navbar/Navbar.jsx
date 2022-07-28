import React from 'react'
import './Navbar.css'
import { Button } from 'antd';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
        <div className="name">
            <h1>ATools</h1>
        </div>
        <div className="startFreeTrail">
         <Button >Start Free Trail</Button>
        </div>
        <div className="login">
        <a href='/'><Button >Login</Button></a>
        </div>
    </div>
  )
}

export default Navbar
