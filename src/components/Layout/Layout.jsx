import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center md:justify-between w-[90%] 2xl:w-[1280px] m-auto">
        <Menu />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
