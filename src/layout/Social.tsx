import { Instagram } from '../components/icons'

const Social = () => {
  const socials = [
    {
      icon: <Instagram />,
      url: 'https://www.instagram.com/karielazem/'
    }
  ]
  return (
    <div className='flex gap-x-2 items-center'>
      {socials.map(item => (
        <a
          key={item.url}
          href={item.url}
          target='_blank'
          rel='noreferrer'
          className='w-7 h-7 text-primary bg-white rounded-full flex items-center justify-center hover:bg-white/80 transition-colors'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
