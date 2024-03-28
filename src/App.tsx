import { useState } from 'react'
import { disablePageScroll } from 'scroll-lock';

import './App.css'

import Screen2 from './screens/Screen2/Screen2';
import Task1 from './screens/Task1';

function App() {

  const [screen, setScreen] = useState(0);
  const changeScreen = (n: number) => {
    setScreen(n);
  }
  disablePageScroll()

  return (
    <>
      <div className="container">

        {screen === 1 && <Screen2 changeScreen={changeScreen}></Screen2>}
        {screen === 2 && <Task1 changeScreen={changeScreen} />}
        <button onClick={() => changeScreen(1)}>Начать</button>


      </div>

    </>
  )
}

export default App
