import React from 'react';
import './QuestionCard.css'
const QuestionCard=(props)=>{
return <div className="card questionCard col s12 ">
    {props.children}
    </div>;
}
export default QuestionCard;