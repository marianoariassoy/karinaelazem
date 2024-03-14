import { Link } from 'wouter'
import { Logo } from '../components/icons'
import Social from './Social'
import Nav from './Nav'
import Bars from './Bars'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-primary flex flex-col'>
      <div className='h-14'></div>
      <div className='border-t border-b border-white'>
        <div className='w-full max-w-7xl m-auto h-14 flex items-center gap-x-6 px-6'>
          <div className='border-r border-white w-1/2 lg:w-1/4 pr-6 h-full flex items-center'>
            <Link href='/'>
              <a className='hover:opacity-80 transition-all'>
                <Logo />
              </a>
            </Link>
          </div>
          <div className='flex items-center gap-x-3 justify-between flex-1'>
            <Nav />
            <Social />
            <Bars />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
