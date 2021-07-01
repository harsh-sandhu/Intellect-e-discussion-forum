import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import SyncLoader from "react-spinners/SyncLoader";

function Login() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const load = () => {
    setInterval(() => {
      setLoading(false);
      return true;
    }, 5000);
    return true;
  };
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const postData = async (e) => {
    e.preventDefault();
    setLoading(true);
    load();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Login Failed:" + data.error);
    } else {
      localStorage.setItem("DisscussionForemJwt", data.token);
      localStorage.setItem("DisscussionForemUser", JSON.stringify(data.user));
      dispatch({ type: "USER", payload: data.user });
      window.alert("Login Successful");
      history.push("/");
    }
  };
  return (
    <div>
      {!loading ? (
        <Card>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                id="email"
                className="validate "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                type="password"
                id="password"
                className="validate"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light center"
            style={{ width: "100%" }}
            type="submit"
            name="action"
            onClick={postData}
          >
            Log In
          </button>
          <Link to="/signup">
            <p className="center-align teal-text" style={{marginTop:"2vh"}}>
              Don't have account?
              <span
                style={{ fontWeight: "bold", cursor: "pointer" }}
                className="teal-text text-darken-4"
              >
                SignUp
              </span>
            </p>
          </Link>
        </form>
        </Card>
      ) : (
        <div style={{marginLeft:"48%",marginTop:'30vh'}} >
        <SyncLoader color={"teal"} loading={loading} size="3vh"/>
        </div>
      )}
    </div>
  );
}
export default Login;
