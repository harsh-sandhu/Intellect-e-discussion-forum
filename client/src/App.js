import { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { SignUp, SignUpNext } from "./Components/SignUp";
import Login from "./Components/login";
import QuestionModal from "./Components/QuestionModal";
import Card from "./UI/Card";
import Navbar from "./UI/Navbar";
import Home from "./Pages/Home";
import ProfileDisplay from "./Components/ProfileDisplay";
import Information from "./Components/Information";
import { reducer, initialState } from "./reducers/userReducer";
import UserProfileDisplay from "./Components/UserProfileDisplay";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("DisscussionForemUser"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      setTimeout(preventBack(), 0) 
      // window.onunload = fn()
      // history.push('/')
    } else {
      history.push("/login");
    }
  }, []);
  function preventBack() { window.history.forward(); }
  // function fn(){
  //   null;
  // }
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/profile">
        <Navbar />
        <ProfileDisplay />
      </Route>
      <Route exact path="/info">
        <Navbar />
        <Information />
      </Route>
      <Route exact path="/profile/:userId">
        <Navbar />
        <UserProfileDisplay />
      </Route>
      <Route exact path="/signup">
        <h4
          style={{
            color: "teal",
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "2vh",
            marginTop: "5vh",
            fontFamily: "Righteous",
            letterSpacing: "2px",
          }}
        >
          Intellect
        </h4>
        <Card>
          <SignUp />
        </Card>
      </Route>
      <Route exact path="/signupnext">
        <Card>
          <SignUpNext />
        </Card>
      </Route>
      <Route exact path="/login">  
        <h4
          style={{
            color: "teal",
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "2vh",
            marginTop: "5vh",
            fontFamily: "Righteous",
            letterSpacing: "2px",
          }}
        >
          Intellect
        </h4>
        <Login />
      </Route>
      <Route exact path="/addQuestion">
        <Navbar />
        <div style={{ marginTop: "20vh" }}>
            <QuestionModal />
        </div>
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ margin: "auto" }}>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;
