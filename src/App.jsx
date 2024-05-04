import { useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Note from './component/Note'
import notes from './notes'

function Wrapper(x){
  //Don't Forget to return every function!!!
  return <Note 
    key = {x.key}
    title = {x.title}
    content = {x.content}
  />
}

function App() {
  return (
    <>
    <div className=''>
      <Header/>
      <div className=''>
        <div className='grid grid-rows-3'>
        <div>
          {notes.map(Wrapper)}
        </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
