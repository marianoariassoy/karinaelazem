import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Item from './Item'

const Index = () => {
  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  })

  const data = [
    {
      id: 1,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <Layout>
      <Title pos={1} />
      <section className='w-full m-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 text-black'>
        {data.map(item => (
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
