import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Photos from './Photos'
// import TextHTML from '../../components/useHTML'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/publicaciones/${lan}`)

  return (
    <Layout>
      <Title
        pos={6}
        title=''
      />
      <div className='pb-6'>
        {loading ? (
          <Loader />
        ) : (
          data.map(publication => (
            <article
              key={publication.id}
              className='border-b border-white'
            >
              <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
                <div className='lg:w-1/4'></div>
                <div className='flex-1 lg:w-3/4 py-6 flex flex-col lg:flex-row gap-6'>
                  <div className='lg:w-1/3'>
                    <div>
                      <Image
                        src={publication.image}
                        alt='biografia'
                      />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h2 className='italic font-bold'>{publication.title}</h2>
                    <div className='whitespace-break-spaces font-secondary text-sm'>{publication.text}</div>
                  </div>
                </div>
              </div>

              <Photos id={publication.id} />
            </article>
          ))
        )}
      </div>
    </Layout>
  )
}

export default Index
