import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Item from './Item'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

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
      <Title
        pos={1}
        title=''
      />
      <section className='w-full m-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 text-black'>
        {loading ? (
          <Loader />
        ) : (
          data.map(item => (
            <Item
              key={item.id}
              data={item}
            />
          ))
        )}
      </section>
    </Layout>
  )
}

export default Index
