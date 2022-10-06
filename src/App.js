import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from './routes/Detail'
import Edit from './routes/Edit'
import Home from './routes/Home'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Write from './routes/Write'

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
