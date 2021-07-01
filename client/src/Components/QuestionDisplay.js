import React from "react";
//import Card from '../UI/Card';
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import "./QuestionDisplay.css";
import { Link } from "react-router-dom";
import QuestionCard from "../UI/QuestionCard";

const QuestionDisplay = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const [answers, setAnswers] = useState(props.answers);
  const addanswer = (text, name, ansId) => {
    fetch("/addanswer", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("DisscussionForemJwt"),
      },
      body: JSON.stringify({
        ansId: ansId,
        name: name,
        text: text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setAnswers(result.answers);
      });
  };
  const deleteAnswer = (ansId, userId) => {
    fetch(`/deleteAnswer/${ansId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("DisscussionForemJwt"),
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAnswers(result.answers);
        //   window.location.reload();
      });
  };
  const deleteQues = (quesId) => {
    fetch(`/deleteQues/${quesId}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("DisscussionForemJwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };
  return (
    <QuestionCard>
      <QuestionCard>
        <div style={{display:'flex',justifyContent:"space-between"}}>
          <div>
            <p className="teal-text text-darken-4">
              <b>
                Asked By:{" "}
                <Link to={`/profile/${props||props!=null?props.askedBy._id:""}`}><span className="teal-text text-darken-3">
                  {props.name} {props.branch} {props.batch}
                </span></Link>
              </b>
            </p>
            <h6 style={{textDecoration:"none"}}>
              <b>Question: </b>
              {props.question}
            </h6>
          </div>
          <div>
            {(state._id===props.askedBy._id)?<button
              onClick={() => deleteQues(props.id)}
              className="btn-small"
              style={{ padding: "2px 5px", backgroundColor: "teal" }}
            >
              <p style={{ fontSize: "5px" }}>
              <i class="fas fa-trash-alt"></i>
              </p>
            </button>:<div></div>}
          </div>
        </div>
      </QuestionCard>
      <div>
        <div className="teal-text text-darken-4 center-align">
          <b>Responses</b>
        </div>
        <div
          className="answerBlock"
          style={{ padding: "10px", maxHeight: "40vh", overflowY: "scroll" }}
        >
          {answers && answers.length > 0 ? (
            answers.map((eachQ) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <p
                    className="teal-text text-darken-2"
                    style={{ width: "85%" }}
                  >
                    <Link to={`/profile/${eachQ.askedBy}`}><b className="teal-text text-darken-2">{eachQ.name} : </b></Link>
                    {/* onClick={()=>getprofile(eachQ._id)} */}
                    <span>{eachQ.text}</span>
                  </p>
                  {eachQ.askedBy === state._id ? (
                    <button
                      onClick={() => deleteAnswer(eachQ._id, props.id)}
                      className="btn-small"
                      style={{ padding: "2px 5px", backgroundColor: "grey" }}
                    >
                      <p style={{ fontSize: "5px" }}>
                        <i class="fas fa-trash"></i>
                      </p>
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })
          ) : (
            <h5>No Answers found</h5>
          )}
        </div>
        <div class="row" style={{ width: "100%", padding: "10px" }}>
          <div class="input-field col s12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target[0].value);
                addanswer(e.target[0].value, props.name, props.id);
                e.target[0].value = "";
              }}
            >
              <input
                type="text"
                class="validate"
                placeholder="Add your answer"
              ></input>
            </form>
          </div>
          {/* <button class="btn waves-effect waves-light center-align" style={{marginLeft:'20px'}} type="button" name="action" >Add</button> */}
        </div>
      </div>
    </QuestionCard>
  );
};
export default QuestionDisplay;
