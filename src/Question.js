import React from "react";

import arrow from "./assets/setinha.png"

export default function Question({ index, question, answer, increaseAnswered}){    
    
    const [cardClasses, setCardClasses] = React.useState("card");
    const [frontClasses, setFrontClasses] = React.useState("front face hidden");
    const [backClasses, setBackClasses] = React.useState("back face hidden");
    const [questionClasses, setQuestionClasses] = React.useState("question");
    const [cardTextClasses, setCardTextClasses] = React.useState("");
    const [cardIon, setCardIon] = React.useState("play-outline");
    const [ionClass, setIonClass] = React.useState("");
    const [answered, setAnswered] = React.useState(false);
    
    function showQuestion(){
       
       if(answered){
            return;
       }else{
            setQuestionClasses("question hidden");
            setFrontClasses("front face");
            setBackClasses("back face");
            setCardClasses("card height130");
       }
    }

    function turnCard(){
        setFrontClasses("face front hideFront");
        setBackClasses("face back showBack");
        setCardClasses("card height130");
    }

    function processResult(color){
        increaseAnswered(color);
        
        setFrontClasses("face hidden");
        setBackClasses("face hidden");
        setQuestionClasses("question");
        setCardClasses("card");
        setCardTextClasses("linethrough " + color);
        
        if(color === 'green'){
            setCardIon("checkmark-circle");
        }else if(color === 'red'){
            setCardIon("close-circle");
        }else{
            setCardIon("help-circle");
        }

        setIonClass(color);
        setAnswered(true);
    }
    
    return(
        <div className={cardClasses}>
            <div className={questionClasses} onClick={showQuestion}>
                <h4 className={cardTextClasses}>Pergunta {index + 1}</h4>
                <div className={ionClass}><ion-icon name={cardIon} ></ion-icon></div>
            </div>
            <div className={frontClasses} onClick={turnCard}>
                <h3>{question}</h3>
                <img src={arrow} alt="setinha"/>
            </div>
            <div className={backClasses}>
                <div className="answer"><h3>{answer}</h3></div>
                <div className="results">
                    <div className="result redBackground" onClick={() => processResult('red')}>Não lembrei</div>
                    <div className="result orangeBackground" onClick={() => processResult('orange')}>Quase não lembrei</div>
                    <div className="result greenBackground" onClick={() => processResult('green')}>Zap!</div>
                </div>
            </div>
        </div>
    )
}