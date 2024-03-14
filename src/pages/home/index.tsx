import { useLocation } from 'wouter'
import { Logo } from '../../components/icons'
import { useDataContext } from '../../context/useDataContext'
import { languages } from '../../components/data'
import Image from '../../components/Image'

const Index = () => {
  const { setLan } = useDataContext()
  const [location, setLocation] = useLocation()

  const changeLanguage = lan => {
    setLan(lan)
    setLocation('/biografia')
    console.log(location)
  }

  return (
    <section className='flex h-screen [&>*]:flex-1 flex-col-reverse lg:flex-row'>
      <div className='h-1/2 lg:h-auto'>
        <Image
          src='https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
        />
      </div>
      <div className='flex items-center justify-center relative'>
        <div className='w-full p-20 fade-in'>
          <Logo />
        </div>
        <div className='absolute text-sm bottom-6 right-6 lg:bottom-12 lg:right-12 font-secondary flex gap-x-2'>
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
