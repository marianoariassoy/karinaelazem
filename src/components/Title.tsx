import { useDataContext } from '../context/useDataContext'
import { menu } from './data'

const Title = ({ pos, title = '' }: { pos: number; title: string }) => {
  const { lan } = useDataContext()
  const section = menu[lan][pos].title

  return (
    <section className='border-b border-white bg-primary'>
      <div className='w-full m-auto max-w-7xl px-6 flex h-14'>
        <div className='w-1/2 lg:w-1/4 border-r border-white h-full flex items-center justify-end px-6'>
          <h1 className='font-secondary text-xl lg:text-3xl'>{section}</h1>
        </div>
        <div className='pl-6 flex items-center'>
          {title && <h1 className='font-bold italic text-sm lg:text-xl'>{title}</h1>}
        </div>
      </div>
    </section>
  )
}

export default Title
