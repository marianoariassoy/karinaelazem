import { useDataContext } from '../context/useDataContext'
import { menu } from './data'

const Title = ({ pos }: { pos: number }) => {
  const { lan } = useDataContext()
  const section = menu[lan][pos].title

  return (
    <section className='border-b border-white bg-primary'>
      <div className='w-full m-auto max-w-7xl px-6 flex h-14'>
        <div className='w-1/2 lg:w-1/4 border-r border-white h-full flex items-center justify-end px-6'>
          <h1 className='font-secondary text-xl lg:text-3xl'>{section}</h1>
        </div>
        <div className='pl-6 w-full flex items-center flex-1'>
          <div className='relative w-full max-w-64 font-secondary text-sm'>
            <select className='block appearance-none w-full bg-primary border border-white hover:border-white/50 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'>
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Title
