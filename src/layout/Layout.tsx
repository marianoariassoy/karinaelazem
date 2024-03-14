import Header from './Header'
import NavMobile from './NavMobile'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavMobile />
      <main>{children}</main>
    </>
  )
}

export default Layout
