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
        <div className='w-full m-auto max-w-7xl px-6 flex items-center'>
          <div className='w-1/2 lg:w-1/4 border-r border-white min-h-14 h-full flex items-center justify-end px-6'>
            <h1 className='font-secondary text-xl lg:text-3xl'>{menu[lan][2].title}</h1>
          </div>
          <div className='pl-6 py-2 w-full flex-1 font-secondary text-sm flex items-center gap-x-3 flex-wrap'>
            {!loading &&
              data.map(item => (
                <button
                  key={item.id}
                  onClick={() => setYear(item.year)}
                  className={`cursor-pointer ${year === item.year ? 'underline' : 'hover:underline'}`}
                >
                  {item.year}
                </button>
              ))}
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
