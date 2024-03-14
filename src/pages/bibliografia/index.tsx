import Layout from '../../layout/Layout'
import Title from '../../components/Title'

const index = () => {
  return (
    <Layout>
      <Title pos={3} />
      <section className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
        <div className='lg:w-1/4'></div>
        <div className='flex-1 py-6 lg:px-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora commodi, repellat exercitationem sint,
          consequuntur porro molestias voluptatibus facere quasi quidem necessitatibus libero minima odio, ab eveniet
          nesciunt aliquam eligendi atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora commodi,
          repellat exercitationem sint, consequuntur porro molestias voluptatibus facere quasi quidem necessitatibus
          libero minima odio, ab eveniet nesciunt aliquam eligendi atque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempora commodi, repellat exercitationem sint, consequuntur porro molestias voluptatibus
          facere quasi quidem necessitatibus libero minima odio, ab eveniet nesciunt aliquam eligendi atque. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Tempora commodi, repellat exercitationem sint, consequuntur
          porro molestias voluptatibus facere quasi quidem necessitatibus libero minima odio, ab eveniet nesciunt
          aliquam eligendi atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora commodi, repellat
          exercitationem sint, consequuntur porro molestias voluptatibus facere quasi quidem necessitatibus libero
          minima odio, ab eveniet nesciunt aliquam eligendi atque.
        </div>
      </section>
    </Layout>
  )
}

export default index
