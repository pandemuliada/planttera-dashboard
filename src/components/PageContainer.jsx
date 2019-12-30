import React from 'react'
import SideNav from './SideNav'

import background from '../static/images/main-background.svg'

const PageContainer = ({ children }) => {
  return (<div className='flex row w-screen bg-gray-100 bg-no-repeat bg-top'>
  <div className='bg-white' style={{ width: 400, boxShadow: '5px 0 10px rgba(0,0,0,0.05)' }}>
    <SideNav />
  </div>
  <div className='p-6 w-full min-h-screen'>
    {children}
  </div>
</div>)
}

export default PageContainer