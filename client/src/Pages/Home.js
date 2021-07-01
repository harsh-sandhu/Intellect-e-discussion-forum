import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import QuestionList from "../Components/QuestionList"
import SyncLoader from "react-spinners/SyncLoader";
const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const load = () => {
    setInterval(() => {
      setLoading(false);
      return true;
    }, 5000);
    return true;
  };
  useEffect(() => {
    fetch("/getQues", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("DisscussionForemJwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.ques);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {load() && data && data.length > 0 ? (
        <QuestionList items={data}/>
      ) : loading ? (
        <div
          className="m-auto mt-5"
          style={{ width: "50vw", marginLeft: "45vw",marginTop:'40vh' }}
        >
          <SyncLoader color={"teal"} loading={loading} size="2vw" />
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
          <h1>No Questions found..</h1>
        </div>
      )}
    </div>
  );
};
export default Home;
