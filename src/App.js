import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import Keyword from './routes/Keyword'
import List from './routes/List'
import Login from './routes/Login'
import Modify from './routes/Modify'
import SignUp from './routes/SignUp'
import Write from './routes/Write'

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/modify/:questionId" element={<Modify />}></Route>
          <Route path="/detail/:questionId" element={<Detail />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/keyword/:keyword" element={<Keyword />}></Route>
          <Route path="/list/:tag" element={<List />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
