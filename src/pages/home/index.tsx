import { useState } from 'react'
import { useLocation } from 'wouter'
import { Logo } from '../../components/icons'
import { useDataContext } from '../../context/useDataContext'
import { languages } from '../../components/data'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { setLan } = useDataContext()
  const [location, setLocation] = useLocation()
  const { data, loading } = useFetch(`/portada`)
  const [pos, setPos] = useState(0)
  const [change, setChange] = useState(false)

  const changeLanguage = lan => {
    setLan(lan)
    setLocation('/biografia')
    console.log(location)
  }

  const nextPos = () => {
    if (pos < data.length - 1) {
      setPos(pos + 1)
    } else {
      setPos(0)
    }
    const section = document.getElementById('home-section')
    if (change) {
      section?.classList.remove('lg:flex-row')
      section?.classList.add('lg:flex-row-reverse')
      setChange(false)
    } else {
      section?.classList.remove('lg:flex-row-reverse')
      section?.classList.add('lg:flex-row')
      setChange(true)
    }
  }

  return (
    <section
      className='flex h-screen [&>*]:flex-1 flex-col-reverse lg:flex-row transition-all'
      id='home-section'
    >
      <div
        className='h-1/2 lg:h-auto cursor-pointer'
        onMouseEnter={nextPos}
      >
        {loading ? (
          <Loader />
        ) : (
          <Image
            src={data[pos].image}
            alt=''
          />
        )}
      </div>
      <div className='flex items-center justify-center relative'>
        <div className='w-full p-20 fade-in'>
          <Logo />
        </div>
        <div className='absolute text-sm bottom-6 right-6 lg:bottom-12 lg:right-12 font-secondary flex gap-x-3'>
          {languages.map(item => (
            <button
              key={item.code}
              className='hover:underline'
              onClick={() => changeLanguage(item.code)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index
