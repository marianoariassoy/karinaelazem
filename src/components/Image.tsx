import { useEffect, useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

interface Props {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='w-full h-full flex items-center justify-center'>
      <SyncLoader />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
