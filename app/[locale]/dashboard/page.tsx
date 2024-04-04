"use client"
import ChartOne from '@/components/Layout/ChartOne'
import SideBar from '@/components/Layout/SideBar'
import React from 'react'

type Props = {
  children:any
}

const Dashboard = (props: Props) => {
  const {children} = props
  return (
    <>
    <SideBar/>
    <div className="p-4 sm:ml-64">
      <ChartOne/>
      
      sdsd
    </div>

    
    {/* {children} */}
    </>
  )
}

export default Dashboard