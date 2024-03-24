// import { useState } from 'react'

import './App.css'

import urlHR from "./assets/hr-question.png"
import urlArrow from "./assets/arrow.svg"

function App() {


  return (
    <>
      <div className='container'>
        <div className="wrapper">
          <div className="points">0/9</div>
          <div className="task">
            <div className="character"><img src={urlHR} alt="HR" /></div>
            <div className="question"><p className="text">Как бы ты разрешил(а)<br />конфликт в команде,<br />где ты лидер?</p></div>
            <div className="answers">
              <div className="answer answer__left"><p className="answer__text">Пошел туда же,<br /> куда и друзья.</p></div>
              <div className="answer answer__right"><p className="answer__text">Делали проект по учебе и не уложились в сроки из-за ошибок в планировании</p></div>
            </div>
            <div className="arrows">
              < img className="arrow arrow__left" src={urlArrow} alt="arrowLeft" />
              <img className="arrow arrow__right" src={urlArrow} alt="arrowRight" />


            </div>
          </div>





        </div>

      </div>

    </>
  )
}

export default App
