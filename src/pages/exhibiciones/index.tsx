import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/exhibiciones/${lan}`)
  const [year, setYear] = useState(null)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        setYear(data[0].year)
      }
    }
  }, [data])

  return (
    <Layout>
      <section className='border-b border-white bg-primary'>
        <div className='w-full m-auto max-w-7xl px-6 flex h-14'>
          <div className='w-1/2 lg:w-1/4 border-r border-white h-full flex items-center justify-end px-6'>
            <h1 className='font-secondary text-xl lg:text-3xl'>{menu[lan][2].title}</h1>
          </div>
          <div className='pl-6 w-full flex items-center flex-1'>
            <div className='relative w-full max-w-64 font-secondary text-sm'>
              <select className='block appearance-none w-full bg-primary border border-white hover:border-white/50 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'>
                {!loading &&
                  data.map(item => (
                    <option
                      key={item.id}
                      value={item.year}
                      onClick={() => setYear(item.year)}
                      className='cursor-pointer'
                    >
                      {item.year}
                    </option>
                  ))}
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
      {loading ? (
        <Loader />
      ) : (
        data
          .filter(item => item.year === year)
          .map(item => (
            <article
              key={item.id}
              className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row text-black'
            >
              <div className='lg:w-1/4 pt-6 lg:text-right lg:p-6'>
                <h2 className='text-primary font-secondary font-medium'>{item.year}</h2>
                <h3 className='italic font-bold'>{item.title}</h3>
                <h3>{item.place}</h3>
              </div>
              <div className='flex-1 lg:w-3/4 py-6 relative'>
                <Slider id={item.id} />
              </div>
            </article>
          ))
      )}
    </Layout>
  )
}

export default Index
