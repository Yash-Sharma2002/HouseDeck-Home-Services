import React from 'react'
import Header from '../HousDeckWebsiteComponents/Header'

export default function HousDeckHomeServicesProfilePage() {
 const commonProps=[
   {name:'Home Services',url:'/home-services'}
 ]
  return (
    <div>
      <Header commonProps={commonProps} />
    </div>
  )
}
