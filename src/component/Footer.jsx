import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <div className='absolute text-center bottom-0 w-full h-7 text-gray-400'>
      Copyright © {currentYear}
    </div>
  )
}

export default Footer
