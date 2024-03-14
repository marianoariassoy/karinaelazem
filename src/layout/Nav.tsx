import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  return (
    <nav className='gap-x-6 font-secondary hidden lg:flex'>
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
    </nav>
  )
}

export default Nav
