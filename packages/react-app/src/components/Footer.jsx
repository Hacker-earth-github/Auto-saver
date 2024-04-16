import React from 'react'

const Footer = () => {

  const currentDate = new Date()
  return (
    <footer className='--flex-center b-top' style={{fontSize: "25px"}}>
      <p>All Rights Reserved || Copyright &copy; {currentDate.getFullYear()}</p>
    </footer>
  )
}

export default Footer