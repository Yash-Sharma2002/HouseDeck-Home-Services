import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Top from '../components/other/Top'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Recommended from '../components/overall/Recommended'
import Review from '../components/overall/Review'
import Working from '../components/other/Working'
import Working2 from '../components/other/Working2'
import Promise from '../components/other/Promise'
import BottomServices from '../components/overall/Services'
import { SearchBar } from '../constants/data';

const Similar2 = React.lazy(() => import('../components/similar-services/Similar2'))

export default function Service() {
  const navigate = useNavigate()
  const { service } = useParams()
  const newService = service.slice(8,)
  const [work, setWork] = React.useState(true)
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'How it works', url: '#how-it-works' },
    { name: 'HouseDeck Promise', url: '#houseDeck-promise' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'Similar Services', url: '#similar-services-for-other-pages' },
  ]

  React.useEffect(() => {
    const random = Math.random()
    if (service.slice(0, 7) !== 'service') return navigate('/home-services/404-Not-Found')
    if (!(Object.keys(SearchBar).includes(service.slice(8,).replace(/ /g, '_').toLowerCase()))) return navigate('/home-services/404-Not-Found')
    if (random > 0.5) return setWork(false)
    if (random < 0.5) return setWork(true)
  }, [])
  return (
    <div>
      <Header commonProps={commonProps} />

      <Top service={newService} />
      {
        work ? <Working service={newService} /> : <Working2 service={newService} />
      }
      <Working service={newService} />

      <Promise />

      <Recommended />

      <Review />
      <Similar2 service={newService} />

      <BottomServices />
      <Footer />
    </div>
  )
}
