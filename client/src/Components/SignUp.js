import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
let name,email,branch,batch,password,cpassword,interest,work,github,linkedin;
const postData=async ()=>{
    console.log("----posting----data")
    const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
          interests: interest,
          branch,
          batch,
          work,
          github,
          linkedin
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 422 || !data) {
        window.alert("Registeration Failed:" + data.error);
        return true;
      } else {
        window.alert("Registeration Successful");
        return false;
      }
}
function SignUp() {
  const [_name, setName] = useState(undefined);
  const [_email, setEmail] = useState(undefined);
  const [_password, setPassword] = useState(undefined);
  const [_cpassword, setCpassword] = useState(undefined);
  const [_batch, setBatch] = useState(undefined);
  const addData=()=>{
    name=_name
    email=_email
    password=_password
    cpassword=_cpassword
    batch=_batch
  }
  return (
    <div>
      <form>
        <div className="row">
          <div className="input-field col s12 center-align">
            <input
              type="text"
              id="user_name"
              className="validate"
              required
              value={_name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="user_name"><b>User Name</b></label>
          </div>
          <div className="input-field col s12">
            <input
              type="email"
              id="email"
              className="validate"
              required
              value={_email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email"><b>Email</b></label>
         </div>
          <div className="input-field col s12">
            <input
              type="password"
              id="password"
              className="validate"
              required
              value={_password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password"><b>Password</b></label>
          </div>
          <div className="input-field col s12">
            <input
              type="password"
              id="confirm_password"
              className="validate"
              required
              value={_cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <label for="confirm_password"><b>Confirm Password</b></label>
          </div>
          <div className="input-field col s12">
            <input
              type="number"
              id="batch"
              className="validate"
              min="2013"
              max="2022"
              required
              value={_batch}
              onChange={(e) => setBatch(e.target.value)}
            />
            <label for="batch"><b>Batch</b></label>
          </div>
        </div>
        <Link to="/signupnext">
          <button
            class="btn waves-effect waves-light center-align s12 white teal-text text-darken-4"
            type="button"
            name="action"
            onClick={addData}
          >
            Next<span>&#62;</span>
          </button>
        </Link>
        <Link to="/login">
          <p className="center-align teal-text " style={{ marginTop: "2vh" }}>
            Already have an account?
            <span
              style={{ fontWeight: "bold" }}
              className="teal-text text-darken-4"
            >
              Login
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
}
const SignUpNext= ()=> {
  const history=useHistory();
  const [_interest, setInterest] = useState(undefined);
  const [_github, setGithub] = useState(undefined);
  const [_linkedin, setLinkedin] = useState(undefined);
  const [_work, setWork] = useState(undefined);
  const [_branch, setBranch] = useState(undefined);
  const addData= async()=>{
    if(_interest&&_interest.length===0){
        _interest=undefined
    }
    if(_github&&_github.length===0){
        _github=undefined
    }
    if(_linkedin&&_linkedin.length===0){
        _linkedin=undefined
    }
    if(_work&&_work.length===0){
        _work=undefined
    }
    interest=_interest
    github=_github
    linkedin=_linkedin
    work=_work
    branch=_branch
    await postData()
    history.push("/login"); 
  }
  return (
    <div>
      <form>
        <div className="row">
          <div
            className="input-field col s12 center-align"
            required
            value={_interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <input type="text" id="interest" className="validate" />
            <label for="interest">
              <b>Your Interests</b>
            </label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              id="githubUsername"
              className="validate"
              value={_github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <label for="githubUsername">
              <b>Your GitHub username</b>
            </label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              id="linkedIn"
              className="validate"
              value={_linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <label for="linkedIn">
              <b>Your LinkedIn account</b>
            </label>
          </div>
          <div className="input-field col s12">
            <textarea
              id="textarea"
              className="materialize-textarea"
              data-length="120"
              value={_work}
              onChange={(e) => setWork(e.target.value)}
            ></textarea>
            <label for="textarea">
              <b>Tell About you</b>
            </label>
          </div>
          <label
            for="branch"
            className="center-align"
            style={{ paddingLeft: "12px" }}
          >
            <b>Your Branch</b>
          </label>
          <div clasName="row">
            <div className="input-field col s6">
              <p>
                <label>
                  <input
                    name="branch"
                    type="radio"
                    id="branch"
                    onChange={(e) => setBranch("CSE")}
                  />
                  <span>CSE</span>
                </label>
              </p>
            </div>
            <div className="input-field col s6">
              <p>
                <label>
                  <input
                    name="branch"
                    type="radio"
                    id="branch"
                    onChange={(e) => setBranch("CS")}
                  />
                  <span>CE</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <Link to="/signup">
          <button
            class="btn center-align s12 white teal-text text-darken-4"
            type="button"
            name="action"
            style={{ paddingRight: "2rem", margin: "1rem" }}
          >
            <span>&#60;&#60;</span>Back
          </button>
        </Link>

        <button
          class="btn waves-effect waves-light center-align s12"
          type="button"
          name="action"
          onClick={addData}
        >
          Sign Me Up
        </button>
        <Link to="/login">
          <p className="center-align teal-text " style={{ marginTop: "2vh" }}>
            Already have an account?
            <span
              style={{ fontWeight: "bold" }}
              className="teal-text text-darken-4"
            >
              Login
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
}
export { SignUp, SignUpNext };
