import Layout from '../../layout/Layout'
import Title from '../../components/Title'
import Image from '../../components/Image'
import ReactPlayer from 'react-player'

const index = () => {
  const videos = [
    {
      id: 1,
      url: 'https://youtu.be/R2LUyro-V08?si=dCTaYlOFmSgc2y3x',
      title: 'Personalidad destacada de la Cultura'
    },
    {
      id: 1,
      url: 'https://youtu.be/4mrAcTCOEWA?si=laynMzhGpbrEejPZ',
      title: 'La Marca Argentina (TV Pública)'
    }
  ]
  return (
    <Layout>
      <Title pos={0} />
      <section className='border-b border-white '>
        <div className='w-full m-auto max-w-7xl px-6 flex flex-col gap-y-6 lg:flex-row'>
          <div className='lg:w-1/4'>
            <div className='aspect-[4/5]'>
              <Image
                src='https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
                alt='biografia'
              />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-3 lg:p-6 flex-1 pb-6'>
            {videos.map(video => (
              <article
                key={video.id}
                className='flex flex-col gap-3'
              >
                <div className='aspect-video'>
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    url={video.url}
                  />
                </div>
                <div className='font-secondary text-sm'>{video.title}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
          <div className='w-1/4'></div>
          <div className='flex-1 font-secondary text-sm py-6 lg:px-6'>
            Egresada de la Escuela Nacional de Bellas Artes Prilidiano Pueyrredón (actual UNA), 1992. Completó el Curso
            Tangible Things, Universidad de Harvard. Coconductora junto con Alberto Passolini el ciclo La Marca
            Original, Televión Pública Argentina, Premio Fund TV 2019 al mejor programa Cultural. Recibió el Premio
            Ugarit, la Beca Fundación Pollock-Krasner, la Beca del Programa Internacional de Intercambio de Artistas de
            la Secretaría de Cultura de Presidencia de la Nación, la Beca FURP Israel-ANP y el Subsidio a la Creación de
            la Fundación Antorchas. Fue Artista en Residencia en los programas Art/Omi en Nueva York, Braziers en
            Oxfordshire y Wasla en Sinaí, Egipto.
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
