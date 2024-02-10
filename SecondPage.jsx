import React from "react"
import he from 'he'



export default function SecondPage(props){
    
    // let userAnswers = []
    // localStorage.setItem("userAnswersArray", JSON.stringify(userAnswers) || "[]")
    // function selectAnswer(answer){
    //     userAnswers = JSON.parse(localStorage.getItem("userAnswersArray"))
    //     userAnswers.push(answer)
    //     localStorage.setItem("userAnswersArray", JSON.stringify(userAnswers) || "[]")
    //     userAnswers = JSON.parse(localStorage.getItem("userAnswersArray"))
    //     console.log(userAnswers)
    // }
    
    // function updateStyle(checkValue){
    //     userAnswers.map(value =>{
    //         return checkValue === value
    //     })

    // }

    

        
    // const [isClicked, setIsClicked] = React.useState(false)
    // const [selectedAnswer, setSelectedAnswer] = React.useState({
    //     [props.question]: ""
    // })
    // let userSelctions = []    
    
    
    // const handleOptionChange = (event) => {
    //     setIsClicked(prevsValue => !prevsValue)
    //   setSelectedAnswer(prevsAnswrs => {
    //     return{
    //         ...prevsAnswrs, [event.target.name] : event.target.value
    //     }
    //   })
      
    // }
    
    

    return(
    <div className="radio-toolbar">
            <legend  className="quiz">{he.decode(props.question)}</legend>
            <label>
                <input
                    type="radio" 
                    name={props.id}
                    value={props.choiceOne}
                    // checked= {props.choiceOne === props.choiceOne}
                    onClick={props.handleInputChange}
                    
                    
                />    
                {props.choiceOne}</label>
            <label>
                <input 
                    type="radio" 
                    name={props.id}
                    value={props.choiceTwo}
                    // checked={props.choiceTwo === props.choiceTwo}
                    onClick={props.handleInputChange}
                    
                />
                {props.choiceTwo}
            </label>
            <label>
                <input 
                    type="radio" 
                    name={props.id}
                    value={props.choiceThree}
                    // checked={props.choiceThree === props.choiceThree}
                    onClick={props.handleInputChange}
                />
                {props.choiceThree}
            </label>
            <label>
                <input 
                    type="radio"
                    name={props.id}
                    value={props.choiceFour}
                    // checked={props.choiceFour === props.choiceFour}
                    onClick={props.handleInputChange}
                    
                />
                {props.choiceFour}
            </label>         
    </div>
    )
}