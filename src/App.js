import React from 'react'
import { CreateContainer, Header,Container } from './components'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
const App = () => {
  return (
    <AnimatePresence >
        <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 px-4 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<Container />}/>
                    <Route path='/createItem' element={<CreateContainer />}/>
                </Routes>
            </main>
        </div>
    </AnimatePresence>
  )
}

export default App