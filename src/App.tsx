import { useState } from 'react'
import { disablePageScroll } from 'scroll-lock';

import Dialog from './components/Dialog/Dialog';

import './App.css'

import Screen2 from './screens/Screen2/Screen2';
import Task1 from './screens/Task1';
import Task2 from './screens/Task2/Task2';




function App() {

  const [screen, setScreen] = useState(0);
  const changeScreen = (n: number) => {
    setScreen(n);
  }
  disablePageScroll()



  return (
    <>
      <div className="container">


        {screen === 1 && <Screen2 changeScreen={() => changeScreen(2)}></Screen2>}

        {screen === 2 && <Dialog dialogNum={0} changeScreen={() => changeScreen(3)} />}
        {screen === 3 && <Dialog dialogNum={1} changeScreen={() => changeScreen(4)} />}

        {screen === 4 && <Task1 changeScreen={() => changeScreen(5)} />}
        {screen === 5 && <Dialog dialogNum={2} changeScreen={() => changeScreen(6)} />}
        {screen === 6 && <Task2 changeScreen={() => changeScreen(7)}></Task2>}


        <button onClick={() => changeScreen(1)}>Начать</button>


      </div>

    </>
  )
}

export default App
