import './styles.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './page/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:info" element={<Info />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
