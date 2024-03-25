import { useState } from 'react'

import './App.css'

import Task1 from './tasks/Task1';

function App() {

  const [screen, setScreen] = useState(0);
  const changeScreen = (n: number) => {
    setScreen(n);
  }

  return (
    <>
      <div className="container">

        {screen === 1 && <Task1 changeScreen={changeScreen} />}
        <button onClick={() => changeScreen(1)}>Начать</button>


      </div>

    </>
  )
}

export default App
