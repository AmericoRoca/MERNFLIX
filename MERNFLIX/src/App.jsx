import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from "../src/components/Layout/Navigation"
import {Video} from "../src/components/Layout/Video"
import {Movies} from "../src/components/Home/Movies"
import { Series } from './components/Home/Series';
import { Footer } from "../src/components/Layout/Footer"

function App() {
  

  return (
    <>
    <Navigation/>
    <Video/>
    <Movies/>
    <Series/>
    <Footer/>
    </>
  )
}

export default App
