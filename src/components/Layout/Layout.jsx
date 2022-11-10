import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row sm:justify-between sm:w-[1280px] m-auto">
        <Menu />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
