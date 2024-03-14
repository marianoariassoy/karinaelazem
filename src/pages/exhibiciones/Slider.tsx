import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    image: string
    title: string
  }[]
}

const Slider = ({ data }: Props) => {
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
