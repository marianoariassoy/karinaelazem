import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const NavMobile = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  const CloseMenu = () => {
    const menu = document.querySelector('.nav-mobile')
    const bars = document.querySelector('.bars')
    menu?.classList.toggle('hidden')
    bars?.classList.toggle('active')
  }

  return (
    <nav
      className='nav-mobile fixed top-0 left-0 h-screen bg-black/10 w-screen backdrop-blur fade-in hidden z-50'
      onClick={CloseMenu}
    >
      <div className='w-full h-full items-center justify-center flex'>
        <div className='flex w-full flex-col gap-y-3 text-center justify-center items-center z-50'>
          {menu[lan].map((item, index) => (
            <Link
              key={index}
              href={item.url}
            >
              <a className={`underline-offset-2 ${location === item.url ? 'italic font-bold' : 'hover:underline'}`}>
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavMobile
