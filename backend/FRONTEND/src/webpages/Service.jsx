import React from 'react'
import { useParams  } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import Top from '../components/other/Top'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Recommended from '../components/overall/Recommended'
import Review from '../components/overall/Review'
import Working from '../components/other/Working'
import Working2 from '../components/other/Working2'
import Promise from '../components/other/Promise'
import BottomServices from '../components/overall/Services'
import { LoginContext } from '../context/Context';
import FaqPainting from '../components/other/FaqPainting';
import { ServiceWithImage } from '../constants/data';

const Similar2 = React.lazy(() => import('../components/similar-services/Similar2'))

export default function Service() {
  const navigate = useNavigate()
  const { city } = React.useContext(LoginContext)
  const { service } = useParams()
  const newService = service.slice(8,)
  const currentCity = city.replace(/ /g, '_').toLowerCase()
  const result = ServiceWithImage[currentCity.toLowerCase()].map(a => a.id)
  const [work, setWork] = React.useState(true)
  const checkavailability = React.useRef(() => { })
  const commonProps = [
    { name: 'Home Services', url: '/' },
    { name: 'How it works', url: '#how-it-works' },
    { name: 'Vapormop Promise', url: '#Vapormop-promise' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'Similar Services', url: '#similar-services-for-other-pages' },
  ]
  checkavailability.current = () => {
    if (!result.includes(newService)) {
      navigate('/404-Not-Found')
      return
    }
    if (service.slice(0, 7) !== 'service') return navigate('/404-Not-Found')
  }
  React.useEffect(() => {
    checkavailability.current()
    const random = Math.random()
    if (random > 0.5)  setWork(false)
    else  setWork(true)
  }, [])

  return (
    <div>
      <Header commonProps={commonProps} />
      <div style={{ marginTop: '40px' }}></div>
      <Top service={newService} />
      {
        work ? <Working service={newService} /> : <Working2 service={newService} />
      }

      <Promise />

      <Recommended />

      <Review />
      {newService === 'Home Painting' ?
        <FaqPainting />
        : null
      }
      <Similar2 service={newService} />

      <BottomServices />
      <Footer />
    </div>
  )
}
