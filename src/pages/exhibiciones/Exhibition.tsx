import useFetch from '../../hooks/useFetch'
import { useDataContext } from '../../context/useDataContext'
import Item from './Item'

const Exhibition = ({ item }) => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/imagenes/${item.id}/${lan}`)

  return (
    <article className='flex flex-col gap-y-6 border-b border-[var(--color-primary)] pb-12'>
      <section>
        <div className='lg:w-1/4 text-right flex flex-col text-black'>
          <span className='text-primary font-bold text-xl'>{item.year}</span>
          <span className='italic font-bold'>{item.title}</span>
          <span>{item.place}</span>
        </div>
        <div></div>
      </section>
      <section className='grid lg:grid-cols-3 gap-6 lg:gap-y-20'>
        {!loading &&
          data.map(item => (
            <Item
              data={item}
              key={item.id}
            />
          ))}
      </section>
    </article>
  )
}

export default Exhibition
