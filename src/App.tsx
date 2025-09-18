import './styles.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './page/home'

function App() {
  return (
    <BrowserRouter>
      <main className='bg-gradient-to-r from-purple-950 to-blue-950'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:info" element={<Info />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
