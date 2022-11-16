import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row md:justify-between 2xl:w-[1280px] w-[90%] m-auto">
        <Menu />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
