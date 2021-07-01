import React from 'react';
import QuestionDisplay from './QuestionDisplay';

const QuestionList=(props)=>
{
    return <>
    <ul>
        {props.items.map((item)=>
    <QuestionDisplay
      key={item._id}
      id={item._id}
      name={item.askedBy.name} 
      branch={item.askedBy.branch}
      batch={item.askedBy.batch}
      askedBy={item.askedBy}
      question={item.question}
      answers={item.answers}
    />
      )}
    </ul>

    </>
}
export default QuestionList;