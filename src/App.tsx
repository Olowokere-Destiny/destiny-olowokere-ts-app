import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './components/Layout'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
