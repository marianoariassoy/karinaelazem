import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Title from '../../components/TitleExhibitions'
import Slider from './Slider'

const Index = () => {
  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  })

  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Una certeza persiste, sala J'
    },
    {
      id: 1,
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Una certeza persiste, sala J'
    },
    {
      id: 1,
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Una certeza persiste, sala J'
    },
    {
      id: 1,
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Una certeza persiste, sala J'
    }
  ]

  return (
    <Layout>
      <Title pos={2} />
      <section className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row text-black'>
        <div className='lg:w-1/4 pt-6 lg:text-right lg:p-6'>
          <h2 className='text-primary font-secondary font-medium'>2012</h2>
          <h3 className='italic font-bold'>Una certeza persiste, sala J</h3>
          <h3>Centro Cultural Recoleta</h3>
        </div>
        <div className='flex-1 lg:w-3/4 py-6 relative'>
          <Slider data={data} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
