import React from 'react'
import Header from '../HousDeckWebsiteComponents/Header';
import MainPageTopQuestions from '../HousDeckWebsiteComponents/MainPageTopQuestions';




export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [
    { name: 'hello' },
    { name: 'hello2' },
    { name: 'We can add as many things as we want' }
  ]
  return (
    <>
      <Header commonProps={commonProps} />
      <MainPageTopQuestions />
    </>
  )
}
