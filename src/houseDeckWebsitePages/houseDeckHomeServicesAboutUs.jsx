import React from 'react'
import Header from '../HousDeckWebsiteComponents/Header'
import InfoTextAboutus from '../HousDeckWebsiteComponents/otherPageComponents/InfoTextAboutus'

export default function HouseDeckHomeServicesAboutUs() {
  const commonProps = [
    {name:'Who we are',url:'#who-we-are'}
  ]
  return (

    <div>
      <Header commonProps={commonProps} />
      
      <InfoTextAboutus />
    </div>
  )
}
