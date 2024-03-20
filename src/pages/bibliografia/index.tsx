import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TextHTML from '../../components/useHTML'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`)

  return (
    <Layout>
      <Title
        pos={3}
        title=''
      />
      <section className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
        <div className='lg:w-1/4'></div>
        <div className='flex-1 py-6 lg:px-6'>{loading ? <Loader /> : <TextHTML text={data[3].text} />}</div>
      </section>
    </Layout>
  )
}

export default Index
