import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { FaBox } from "react-icons/fa";

const Header = () => {
  return (
    <header>
    <div>

      <FaBox /><Link to="/">ÀJọ</Link>
    </div>

      
    </header>
  )
}

export default Header