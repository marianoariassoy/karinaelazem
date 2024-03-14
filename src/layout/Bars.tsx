const Bars = () => {
  const OpenMenu = () => {
    const menu = document.querySelector('.nav-mobile')
    const bars = document.querySelector('.bars')
    menu?.classList.toggle('hidden')
    bars?.classList.toggle('active')
  }

  return (
    <div
      className='bars lg:hidden hover:text-gray-500'
      onClick={OpenMenu}
    >
      <span></span>
      <span></span>
    </div>
  )
}

export default Bars
