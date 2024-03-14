import { Link } from 'wouter'
import Image from '../../components/Image'

const Item = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div className='relative'>
        <Link href={`/obras/${data.id}`}>
          <a className='absolute h-full w-full z-10 bg-primary mix-blend-multiply top-0 left-0 opacity-0 hover:opacity-80 transition-opacity'></a>
        </Link>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='text-sm font-secondary'>{data.title}</div>
    </article>
  )
}

export default Item
