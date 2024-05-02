import Image from '../../components/Image'
import Photos from './Photos'

const Item = ({ publication }) => {
  const URL =
    publication.id === 38
      ? 'https://patriciarizzoeditora.mitiendanube.com/productos/karina-el-azem-de-mercedes-casanegra-y-otros/'
      : `mailto:karielazem@gmail.com`

  return (
    <article className='border-b border-white'>
      <div className='w-full m-auto max-w-7xl px-6 flex flex-col lg:flex-row'>
        <div className='lg:w-1/4'></div>
        <div className='flex-1 lg:w-3/4 py-6 flex flex-col lg:flex-row gap-6'>
          <div className='lg:w-1/3'>
            <div>
              <Image
                src={publication.image}
                alt='biografia'
              />
            </div>
          </div>
          <div className='flex-1'>
            <h2 className='italic font-bold'>{publication.title}</h2>
            <div className='whitespace-break-spaces font-secondary text-sm'>{publication.text}</div>
            <a
              href={URL}
              className='font-secondary bg-white text-primary text-sm p-2 mt-6 mb-6 inline-block hover:bg-black'
            >
              ADQUIRIRLO
            </a>
          </div>
        </div>
      </div>

      <Photos id={publication.id} />
    </article>
  )
}

export default Item
