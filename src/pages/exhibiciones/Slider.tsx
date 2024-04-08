import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Slider = ({ id }) => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/imagenes/${id}/${lan}`)

  if (loading) {
    return <Loader />
  }
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 250,
    indicators: true,
    arrows: false,
    infinite: true,
    pauseOnHover: true
  }

  return (
    <Slide {...sliderProperties}>
      {data.map(item => (
        <div key={item.id}>
          <Image
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </Slide>
  )
}

export default Slider
