import { Logo } from './components/icons'

const Soon = () => {
  return (
    <section className='flex items-center justify-center h-screen w-screen'>
      <div className='flex flex-col justify-center items-center gap-y-3'>
        <div>
          <Logo />
        </div>
        <div className='text-xl'>Estoy renovando mi web</div>
      </div>
    </section>
  )
}

export default Soon
