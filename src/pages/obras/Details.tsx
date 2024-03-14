import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Item from './ItemsDetails'
import Modal from './Modal'

const Index = () => {
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  })

  const data = [
    {
      id: 1,
      title: 'Gauchito Gil, 1997',
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Gauchito Gil, 1997',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Gauchito Gil, 1997',
      image: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Gauchito Gil, 1997',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const handelNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentImage(data[0].image)
      setcurrentIndex(0)
    } else {
      setCurrentImage(data[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
    }
  }
  const handelPrev = () => {
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
      <Title
        pos={1}
        title='Devociones populares'
      />
      <section className='w-full m-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 text-black'>
        {data.map(item => (
          <Item
            key={item.id}
            data={item}
            setCurrentImage={setCurrentImage}
          />
        ))}
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
