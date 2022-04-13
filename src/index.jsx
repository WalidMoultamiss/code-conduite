import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './Pages/App'
import { Questions } from './Pages/Questions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
)
