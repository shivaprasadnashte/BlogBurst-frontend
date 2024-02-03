import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Blogpage from './components/BlogPage'
import Comments from './components/Comments'
import Contact from './components/Contact'
import CreatBlog from './components/CreatBlog'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creatblog" element={<CreatBlog />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>


    </BrowserRouter>  
      
     
    </>
  )
}

export default App
