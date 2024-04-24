import { useEffect, useState } from 'react'
import { Link, useParams } from 'wouter'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Item from './ItemsDetails'
import Modal from './Modal'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Back } from '../../components/icons'

interface Data {
  obra: number
}

const Index = () => {
  const { lan } = useDataContext()
  const { obra } = useParams() as Data
  const { data, loading } = useFetch(`/obras/${obra}/${lan}`)
  const { data: images, loading: imagesLoading } = useFetch(`/imagenes/${obra}/${lan}`)

  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  const handelNext = () => {
    if (images)
      if (currentIndex === images.length - 1) {
        setCurrentImage({ image: images[0].image, text: images[0].text })
        setcurrentIndex(0)
      } else {
        setCurrentImage({ image: images[currentIndex + 1].image, text: images[currentIndex + 1].text })
        setcurrentIndex(currentIndex + 1)
      }
  }
  const handelPrev = () => {
    if (images)
      if (currentIndex === 0) {
        setCurrentImage(images[images.length - 1].image)
        setcurrentIndex(images.length - 1)
      } else {
        setCurrentImage(images[currentIndex - 1].image)
        setcurrentIndex(currentIndex - 1)
      }
  }

  return (
    <Layout>
      {!loading && (
        <Title
          pos={1}
          title={data[0].title}
        />
      )}

      <section className='w-full m-auto max-w-7xl px-6 py-12'>
        <div className='flex justify-end pb-6 '>
          <Link href='/obras'>
            <a className='text-primary hover:text-black'>
              <Back />
            </a>
          </Link>
        </div>
        <div className=' text-black'>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter='1rem'>
              {imagesLoading ? (
                <Loader />
              ) : (
                images.map(item => (
                  <Item
                    key={item.id}
                    data={item}
                    setCurrentImage={setCurrentImage}
                  />
                ))
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handelNext={handelNext}
          handelPrev={handelPrev}
        />
      )}
    </Layout>
  )
}

export default Index
