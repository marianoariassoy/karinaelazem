import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Image from '../../components/Image'

const index = () => {
  const data = [
    {
      id: 1,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Obras 2020',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <Layout>
      <Title
        pos={6}
        title=''
      />
      <div className='pb-6'>
        <article className='border-b border-white'>
          <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
            <div className='lg:w-1/4'></div>
            <div className='flex-1 lg:w-3/4 py-6 flex flex-col lg:flex-row gap-6'>
              <div>
                <div className='aspect-[4/5]'>
                  <Image
                    src='https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt='biografia'
                  />
                </div>
              </div>
              <div>
                <h2 className='italic font-bold'>Karina El Azem, 2024</h2>
                Autores: Florencia Battiti, Flor Qualina y Gabriel Pérez-Barreiro Medidas 23 x 27 cm
                <br />
                Edición Bilingüe Español / Inglés
                <br />
                Traducción y corrección: Mariángeles Fernández Rajoy. Cantidad de Páginas 180
                <br />
                Temática: Arte, obra de la artista y ensayos sobre su producción. Recopilación de textos de y sobre el
                artista, investigación cronológica y textos periodísticos de distintas épocas.
                <br />
                Diseño Gráfico y edición: Fabián Muggeri Créditos Fotográficos de: Gustavo Sosa Pinilla Año de edición:
                2024
                <br />
                Adquirirlo
              </div>
            </div>
          </div>
          <div className='w-full m-auto max-w-7xl grid grid-cols-3 lg:grid-cols-5 gap-3 pb-6 px-6'>
            {data.map(({ id, image }) => (
              <div key={id}>
                <Image
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
        </article>
        <article className='border-b border-white'>
          <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
            <div className='lg:w-1/4'></div>
            <div className='flex-1 lg:w-3/4 py-6 flex flex-col lg:flex-row gap-6'>
              <div>
                <div className='aspect-[4/5]'>
                  <Image
                    src='https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt='biografia'
                  />
                </div>
              </div>
              <div>
                <h2 className='italic font-bold'>Karina El Azem, 2024</h2>
                Autores: Florencia Battiti, Flor Qualina y Gabriel Pérez-Barreiro Medidas 23 x 27 cm
                <br />
                Edición Bilingüe Español / Inglés
                <br />
                Traducción y corrección: Mariángeles Fernández Rajoy. Cantidad de Páginas 180
                <br />
                Temática: Arte, obra de la artista y ensayos sobre su producción. Recopilación de textos de y sobre el
                artista, investigación cronológica y textos periodísticos de distintas épocas.
                <br />
                Diseño Gráfico y edición: Fabián Muggeri Créditos Fotográficos de: Gustavo Sosa Pinilla Año de edición:
                2024
                <br />
                Adquirirlo
              </div>
            </div>
          </div>
          <div className='w-full m-auto max-w-7xl grid grid-cols-3 lg:grid-cols-5 gap-3 pb-6 px-6'>
            {data.map(({ id, image }) => (
              <div key={id}>
                <Image
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
        </article>
        <article className='border-b border-white'>
          <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
            <div className='lg:w-1/4'></div>
            <div className='flex-1 lg:w-3/4 py-6 flex flex-col lg:flex-row gap-6'>
              <div>
                <div className='aspect-[4/5]'>
                  <Image
                    src='https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt='biografia'
                  />
                </div>
              </div>
              <div>
                <h2 className='italic font-bold'>Karina El Azem, 2024</h2>
                Autores: Florencia Battiti, Flor Qualina y Gabriel Pérez-Barreiro Medidas 23 x 27 cm
                <br />
                Edición Bilingüe Español / Inglés
                <br />
                Traducción y corrección: Mariángeles Fernández Rajoy. Cantidad de Páginas 180
                <br />
                Temática: Arte, obra de la artista y ensayos sobre su producción. Recopilación de textos de y sobre el
                artista, investigación cronológica y textos periodísticos de distintas épocas.
                <br />
                Diseño Gráfico y edición: Fabián Muggeri Créditos Fotográficos de: Gustavo Sosa Pinilla Año de edición:
                2024
                <br />
                Adquirirlo
              </div>
            </div>
          </div>
          <div className='w-full m-auto max-w-7xl grid grid-cols-3 lg:grid-cols-5 gap-3 pb-6 px-6'>
            {data.map(({ id, image }) => (
              <div key={id}>
                <Image
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default index
