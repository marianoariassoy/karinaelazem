import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Item from './ItemsDetails'
import Modal from './Modal'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { id } = useParams()
  const { data, loading } = useFetch(`/obras/${id}/${lan}`)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  const handelNext = () => {
    if (data)
      if (currentIndex === data.length - 1) {
        setCurrentImage(data[0].image)
        setcurrentIndex(0)
      } else {
        setCurrentImage(data[currentIndex + 1].image)
        setcurrentIndex(currentIndex + 1)
      }
  }
  const handelPrev = () => {
    if (data)
      if (currentIndex === 0) {
        setCurrentImage(data[data.length - 1].image)
        setcurrentIndex(data.length - 1)
      } else {
        setCurrentImage(data[currentIndex - 1].image)
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

      <section className='w-full m-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 text-black'>
        {loading ? (
          <Loader />
        ) : (
          data.map(item => (
            <Item
              key={item.id}
              data={item}
              setCurrentImage={setCurrentImage}
            />
          ))
        )}
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
