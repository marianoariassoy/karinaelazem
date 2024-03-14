import { Back, Forward } from '../../components/icons'

const Modal = ({ currentImage, setCurrentImage, handelNext, handelPrev }) => {
  const handelClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }
  }
  return (
    <div
      className='fixed fade-in bg-black/50 backdrop-blur h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 px-6 py-32 lg:px-32 lg:py-16'
      onClick={handelClick}
    >
      <div className='bg-white p-4 fade-in max-w-6xl'>
        <img
          src={currentImage}
          className='h-auto lg:h-[70vh] w-auto object-cover'
        />
      </div>
      {/* <button
        className='absolute text-primary hover:text-white top-8 right-8 dismiss cursor-pointer'
        onClick={handelClick}
      >
        <Down />{' '}
      </button> */}
      <button
        className='absolute top-1/2 left-8 text-white cursor-pointer text-primary hover:text-white z-40 hidden lg:block'
        onClick={handelPrev}
      >
        <Back />
      </button>
      <button
        className='absolute top-1/2 right-8 text-white cursor-pointer text-primary hover:text-white z-40 hidden lg:block'
        onClick={handelNext}
      >
        <Forward />
      </button>
    </div>
  )
}

export default Modal
