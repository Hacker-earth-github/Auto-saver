import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { FaBox } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <FaBox /><Link to="/">ÀJọ</Link>
    </header>
  )
}

export default Header