import React from 'react'
import './App.css'
import SecondPage from './SecondPage'
import {nanoid} from "nanoid"
import ButtonComponent from './Button'

export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)
    function hideFirstPage(){
        setStartQuiz(prevsState => !prevsState)
    }
    const[submitAnswers, setSubmitAnswers] = React.useState(false)
    const [quiz, setQuiz] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState([])
    
    
    React.useEffect(() =>{
       if(startQuiz === true){
            fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuiz(data.results))    
            
       }
    }, [startQuiz])

    React.useEffect(() =>{
        const correctAnswersArray = quiz.map(answer =>{
            return answer.correct_answer
           })
        setCorrectAnswers(correctAnswersArray)
    },[quiz])
    function check(){
        event.preventDefault()
        console.log(formArray)
    }

    const [formArray, setFormArray] = React.useState()
    const handleInputChange = (event) => {
        setFormArray((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
         
        }))
      }
      console.log(formArray)
 
    const renderQuestions = quiz.map(questions =>{
        return <SecondPage
        key={nanoid()}
        id ={nanoid()}
        question= {questions.question}
        choiceOne= {questions.correct_answer}
        choiceTwo= {questions.incorrect_answers[0]}
        choiceThree= {questions.incorrect_answers[1]}
        choiceFour= {questions.incorrect_answers[2]}
        isSelected = {submitAnswers}
        correctAnswer = {questions.correct_answer}
        handleInputChange={handleInputChange}
        
        />      

        
    })
    
    
    
        
        const checkStyle = {
            display: startQuiz ? "flex" : "none" 
        }
        const styles= {
            display: startQuiz ? "none" : "flex"
        }
    
    
    return( 
        <main>
            <div className="cont">
                <div style={styles} className="first-page">
                    <h1>Quizzical</h1>
                    <p>Some description if needed</p>
                    <button onClick={hideFirstPage}>Start quiz</button>
                </div>
                <div>
                  <form>
                    {renderQuestions}  
                  </form>   
                  <button type="submit"  className="submit-btn" onClick={check}>Check Answers</button>
                </div>  
            </div>
        </main>      
    )
}

