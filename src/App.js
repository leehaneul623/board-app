import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/MainContent/Footer'
import Header from './components/MainContent/Header'
import Menu from './components/MainContent/Menu'
import Home from './routes/Home'

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Router>
        <Header />
        <div className="flex flex-row w-[1280px] m-auto">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
