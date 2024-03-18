import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Image from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'

const Photos = ({ id }) => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/imagenes/${id}/${lan}`)

  return (
    <div className='w-full m-auto max-w-7xl grid grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3 pb-6 px-6'>
      {loading ? (
        <Loader />
      ) : (
        data.map(({ id, image }) => (
          <div key={id}>
            <Image
              src={image}
              alt={image}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Photos
