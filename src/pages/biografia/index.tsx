import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Image from '../../components/Image'
import TextHTML from '../../components/useHTML'
import ReactPlayer from 'react-player'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan, imagesstatics } = useDataContext()
  const { data, loading } = useFetch(`/videos/${lan}`)
  const { data: texts, loading: loadingTexts } = useFetch(`/textos/${lan}`)

  return (
    <Layout>
      <Title
        pos={0}
        title=''
      />
      <section className='border-b border-white pb-6 my-6'>
        <div className='w-full m-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-6'>
          {loading ? (
            <Loader />
          ) : (
            data.map(video => (
              <article
                key={video.id}
                className='flex flex-col gap-3'
              >
                <div className='aspect-video'>
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    url={video.url}
                  />
                </div>
                <div className='font-secondary text-sm'>{video.title}</div>
              </article>
            ))
          )}
        </div>
      </section>
      <section>
        <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-6'>
          <div className='lg:w-1/4'>
            <div className='aspect-[4/5]'>
              <Image
                src={`${imagesstatics}/bio.jpg`}
                alt='biografia'
              />
            </div>
          </div>
          <div className='flex-1 font-secondary text-sm whitespace-break-spaces'>
            {loadingTexts ? <Loader /> : <TextHTML text={texts[0].text} />}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
