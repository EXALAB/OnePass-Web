import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router'

import Root from './routes/root.jsx'
import Privacy from './routes/privacy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
