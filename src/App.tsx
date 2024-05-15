import { useState } from 'react'

import { YMInitializer } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';
import { disablePageScroll } from 'scroll-lock';

import Dialog from './components/Dialog/Dialog';

import './App.css'

import Screen0 from './screens/Screen0/Screen0';
import Screen2 from './screens/Screen2/Screen2';
import Task1 from './screens/Task1';
import Task2 from './screens/Task2/Task2';
import ScreenLast from './screens/ScreenLast/ScreenLast';




function App() {

  const [screen, setScreen] = useState(0);
  const changeScreen = (n: number) => {
    setScreen(n);
  }
  disablePageScroll()

  const changeScreen4 = () => {
    changeScreen(4)
    ym('reachGoal', 'part1')
  }
  const changeScreen6 = () => {
    changeScreen(6)
    ym('reachGoal', 'part2')
  }



  return (
    <>
      <YMInitializer
        accounts={[97269777]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          defer: true
        }}
        version="2"
      />

      <div className="container">
        {screen === 0 && <Screen0 changeScreen={() => changeScreen(1)} />}
        {screen === 1 && <Screen2 changeScreen={() => changeScreen(2)}></Screen2>}

        {screen === 2 && <Dialog dialogNum={0} changeScreen={() => changeScreen(3)} />}
        {screen === 3 && <Dialog dialogNum={1} changeScreen={changeScreen4} />}

        {screen === 4 && <Task1 changeScreen={() => changeScreen(5)} />}
        {screen === 5 && <Dialog dialogNum={2} changeScreen={changeScreen6} />}
        {screen === 6 && <Task2 changeScreen={() => changeScreen(7)}></Task2>}
        {screen === 7 && <ScreenLast></ScreenLast>}

      </div >

    </>
  )
}

export default App
