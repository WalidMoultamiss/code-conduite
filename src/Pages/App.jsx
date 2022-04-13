import { useState, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { FilesViewer } from '../FilesViewer'


const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require('@electron/remote')

const formatSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

const App = () => {


  return (
    <div className=""
      style={{
        width:"100%",
        height:"100vh",
        backgroundImage:"url('/cars.jpg')",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <button
          className="btn btn-sm btn-outline-secondary"
        >
          permis de conduire B
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
        >
          permis de conduire BE
        </button>
      </div>
    </div>
  )
}

export default App
