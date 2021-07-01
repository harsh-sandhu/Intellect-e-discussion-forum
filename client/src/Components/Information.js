import React from "react";
import "./Information.css";
import Img_ayushi from "../Images/AyushiKapoor.jpeg";
import Img_harsh from "../Images/HarshSandhu.jpeg";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="card information">
      <h6 className="grey-text text-darken-3 center-align">
        <b>About the website..</b>
      </h6>
      <hr></hr>
      <p>
        An official e-forum for Chitkarians is established to provide students
        of all years a common platform where they can collaborate, brainstorm,
        and solve each other’s queries regarding placement, academics,
        internships, and other issues. This discussion forum will benefit the
        department in the following ways: The forum hosts posts by students of
        all the four years on varied topics of discussion Served as an
        additional communication channel for interaction among the student body
        as well as alumnae and eased the process of seeking assistance, guidance
        and support Accommodated the needs of the virtual model by facilitating
        inclusivity
      </p>

      <h6 className="grey-text text-darken-3 center-align">
        <b>How this works</b>
      </h6>
      <hr></hr>
      <p>
        A cross- functional question board for the students has been set up in
        the home page of the website, under the ask-a-question section. The
        questions can be answered by other users strictly students or alumni in
        the form of opinions.
      </p>
      <h6 className="grey-text text-darken-3 center-align">
        <b>Developers</b>
      </h6>
      <hr></hr>
      <div className="developers">
        <Link to='/profile/60dd6c6dec10022364cb1d59'>
          <div>
            <img src={Img_ayushi} alt="Ayushi" />
            <p className="center-align grey-text text-darken-3 ">
              <u>
                <b>Ayushi Kapoor</b>
              </u>
            </p>
            <p className="grey-text text-darken-1">Front-end Developer</p>
          </div>
        </Link>
        <Link to='/profile/60dd6c6f019ef25f62a32537'>
          <div>
            <img src={Img_harsh} alt="Harsh" />
            <p className="center-align grey-text text-darken-3 ">
              <u>
                <b>Harsh Sandhu</b>
              </u>
            </p>
            <p className="grey-text text-darken-1">Back-end Developer</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Information;
