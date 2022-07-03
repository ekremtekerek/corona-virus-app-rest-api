import React, { useState } from 'react'
import Header from './components/Header'
import CoronaForCountry from './components/CoronaForCountry'
import RecorderCorona from './components/RecorderCorona'
import CoronaForContinent from './components/CoronaForContinent'

function App() {
  const [key,setKey] = useState(1)
  return (
    <div>
      
        <Header onMenuChange={(_key)=>{
          setKey(_key)
        }}/>

        <div className='md:container md:mx-auto p-8 page-content'>
          {key === 1 && <CoronaForCountry/>}
          {key === 2 && <RecorderCorona/>}
          {key === 3 && <CoronaForContinent/>}
        </div>

    </div>
  )
}

export default App