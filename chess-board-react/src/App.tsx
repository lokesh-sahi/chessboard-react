import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChessBoad from './components/ChessBoard'

function App() {

  return (
    <>
      <ChessBoad size={8}/>
    </>
  )
}

export default App
