import { useState } from 'react'
import './App.css'
import Header from './componentes/header'
import Footer from './componentes/footer'

function App() {


  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  async function Mostrar() {
    const response = await fetch('https://opentdb.com/api.php?amount=30&category=15')
    const json =  await response.json()

    const numAleatorio = Math.floor(Math.random() * 99)
    
    const question = json.results[numAleatorio]
    const answer = response.results[numAleatorio]

    setAnswer(question.correct_answer)
    setQuestion(answer.question)

  }
  

  return (
    <>
    <Header/>

    <div>
    <h4>Pergunta {question}</h4>
    <p>Resposta {answer}</p>
    <button onClick={Mostrar}>mostrar</button>
    </div>

    <Footer/>
    </>
  )
}

export default App
