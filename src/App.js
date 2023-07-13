import React, { useEffect } from 'react'
import { CreateContainer, Header,Container, Contact, Service } from './components'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'
const App = () => {
  const[{ foodItems } , dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }
  useEffect(() => {
    fetchData();
  },[])
   return (
    <AnimatePresence >
        <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 px-4 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<Container />}/>
                    <Route path='/createItem' element={<CreateContainer />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/service' element={<Service />}/>
                </Routes>
            </main>
        </div>
    </AnimatePresence>
  )
}

export default App