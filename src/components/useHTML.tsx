const TextHTML = ({ text }: { text: string }) => {
  return (
    <div
      className='fade-in text-wrap'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default TextHTML
