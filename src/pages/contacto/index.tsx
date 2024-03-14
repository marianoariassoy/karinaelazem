import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Form from './Form'

const Index = () => {
  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  })

  return (
    <Layout>
      <Title
        pos={7}
        title=''
      />
      <section className=' text-black'>
        <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
          <div className='lg:w-1/4'></div>
          <div className='flex-1 py-6 lg:px-6'>
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
