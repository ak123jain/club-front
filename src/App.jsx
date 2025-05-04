 import React from 'react'
 import {Route , Routes} from 'react-router-dom'
import Hero from './components/Hero'
import './index.css'
import Email from './Pages/Email'
 
 
 const App = () => {
   return (
     <div>
       <Routes>
         <Route path='/' element={<Hero />} />
         <Route path='/sendemail' element={<Email />} />
         <Route path='/contact' element={<h1>Contact</h1>} />
       </Routes>
     </div>
   )
 }
 
 export default App
 