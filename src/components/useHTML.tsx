const TextHTML = ({ text }) => {
  return (
    <div
      className='fade-in lg:text-xl text-wrap'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default TextHTML
