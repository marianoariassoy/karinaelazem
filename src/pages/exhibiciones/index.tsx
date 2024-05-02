import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import useFetch from '../../hooks/useFetch'
import { useDataContext } from '../../context/useDataContext'
import Exhibition from './Exhibition'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/exhibiciones/${lan}`)
  const [year, setYear] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  function obtenerAniosUnicos(arrayDeObjetos) {
    const aniosUnicos = {}
    arrayDeObjetos.forEach(objeto => {
      aniosUnicos[objeto.year] = true
    })
    return Object.keys(aniosUnicos).map(anio => parseInt(anio))
  }

  const dataFiltered = loading ? [] : data.filter(item => item.year === year || year === 0)
  const dataMenuFiltered = loading ? [] : obtenerAniosUnicos(data)

  return (
    <Layout>
      <section className='border-b border-white bg-primary'>
        <div className='w-full m-auto max-w-7xl px-6 flex items-center'>
          <div className='w-1/2 lg:w-1/4 border-r border-white min-h-14 h-full flex items-center justify-end px-6'>
            <h1 className='font-secondary text-xl lg:text-3xl'>{menu[lan][2].title}</h1>
          </div>
          <div className='pl-6 py-2 w-full flex-1 font-secondary text-sm flex items-center gap-x-3 flex-wrap'>
            <button
              className={`cursor-pointer ${year === 0 ? 'underline' : 'hover:underline'}`}
              onClick={() => setYear(0)}
            >
              Todos
            </button>
            {dataMenuFiltered.map((item, index) => (
              <button
                key={index}
                onClick={() => setYear(item)}
                className={`cursor-pointer ${year === item ? 'underline' : 'hover:underline'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className='w-full m-auto max-w-7xl px-6 py-12 flex flex-col gap-y-6'>
        {dataFiltered.map(item => (
          <Exhibition
            key={item.id}
            item={item}
          />
        ))}
      </section>
    </Layout>
  )
}

export default Index
