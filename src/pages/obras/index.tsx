import { useEffect } from 'react'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import Item from './Item'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import { menu } from '../../components/data'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/obras/${lan}`)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  return (
    <Layout>
      <section className='border-b border-white bg-primary'>
        <div className='w-full m-auto max-w-7xl px-6 flex items-center'>
          <div className='w-1/2 lg:w-1/4 border-r border-white min-h-14 h-full flex items-center justify-end px-6'>
            <h1 className='font-secondary text-xl lg:text-3xl'>{menu[lan][1].title}</h1>
          </div>
          <div className='pl-6 py-2 w-full flex-1 font-secondary text-sm flex items-center gap-x-3 flex-wrap'>
            {!loading &&
              data.map(item => (
                <div key={item.id}>
                  <Link href={`/obras/${item.id}`}>
                    <a className='hover:underline'>{item.title}</a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className='w-full m-auto max-w-7xl px-6 py-12 text-black grid lg:grid-cols-3 gap-6 lg:gap-y-20'>
        {!loading &&
          data.map(item => (
            <Item
              key={item.id}
              data={item}
            />
          ))}
      </section>
    </Layout>
  )
}

export default Index
