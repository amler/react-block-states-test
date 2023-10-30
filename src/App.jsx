import { useState } from 'react'
import './App.css'
import ColorBox from './ColorBox'

const colors =[
  '#FF0000',
  '#FF5349',
  '#FFAE42',
  '#FFA500',
  '#FFFF00',
  '#9acd32',
  '#2e8b57',
  '#00ff00',
  '#0D98BA',
  '#0000ff',
  '#8a2be2',
  '#800080',
  '#953553',
];

function App() {
  return (
    <div>
      <ColorBox  />
    </div>
  )
}

export default App
