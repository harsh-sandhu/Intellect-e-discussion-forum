import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Card from "../UI/Card";
import './QuestionModal.css'
import { UserContext } from "../App";
const QuestionModal = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [question, setQuestion] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const load = () => {
    setInterval(() => {
      setLoading(false);
      return true;
    }, 15000);
    return true;
  };
  const postQues = (e) => {
    e.preventDefault();
    setLoading(true);
    load();
    console.log(state);
    fetch("/postQues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("DisscussionForemJwt"),
      },
      body: JSON.stringify({
        question,
        user: state,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          window.alert(data.error);
        } else {
          setLoading(false);
          window.alert("Question Posted");
          history.push("/");
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {!loading ? (
        <Card>
          <div>
            <div className="row">
              <h4 className="center-align">Post Your Question</h4>
              <hr></hr>
              <hr></hr>
              <div className="input-field col s12">
                <i className="material-icons prefix">question_answer</i>
                <input
                  id="question"
                  type="text"
                  className="validate"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></input>
                <label htmlFor="question">Question</label>
              </div>
            </div>
            <div className="buttons">
              <button
                className="btn waves-effect waves-light center-align s12 teal lighten-5 teal-text text-darken-4"
                type="button"
                name="action"
              >
                <Link to="/">
                  <b className="teal-text">Cancel</b>
                </Link>
              </button>
              <button
                className="btn waves-effect waves-light center-align s12 teal lighten-3 teal-text text-darken-4"
                type="button"
                name="action"
                onClick={postQues}
              >
                <b>Post</b>
              </button>
            </div>
          </div>
        </Card>
      ) : (
        <div style={{marginLeft:"47%",marginTop:'30vh'}} >
        <SyncLoader color={"teal"} loading={loading} size="3vh"/>
        </div>
      )}
    </div>
  );
};

export default QuestionModal;
