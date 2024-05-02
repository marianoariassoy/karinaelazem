import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item from './Item'
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
            <Item
              key={publication.id}
              publication={publication}
            />
          ))
        )}
      </div>
    </Layout>
  )
}

export default Index
