import React from "react";
function SignUpNext() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="input-field col s12 center-align" required>
            <input type="text" id="interest" className="validate" />
            <label for="interest">
              <b>Your Interests</b>
            </label>
          </div>
          <div className="input-field col s12">
            <input type="text" id="githubUsername" className="validate" />
            <label for="githubUsername">
              <b>Your GitHub username</b>
            </label>
          </div>
          <div className="input-field col s12">
            <input type="text" id="linkedIn" className="validate" />
            <label for="linkedIn">
              <b>Your LinkedIn account</b>
            </label>
          </div>
          <div className="input-field col s12">
            <textarea
              id="textarea"
              className="materialize-textarea"
              data-length="120"
              placeholder="company you are currently working,your experience and future goals"
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
                  <input name="CSE" type="radio" id="branch" />
                  <span>CSE</span>
                </label>
              </p>
            </div>
            <div className="input-field col s6">
              <p>
                <label>
                  <input name="CE" type="radio" id="branch" />
                  <span>CE</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <button
          class="btn center-align s12 white teal-text text-darken-4"
          type="button"
          name="action"
          style={{ paddingRight: "2rem", margin: "1rem" }}
        >
          <span>&#60;&#60;</span>Back
        </button>

        <button
          class="btn waves-effect waves-light center-align s12"
          type="button"
          name="action"
        >
          Sign Me Up
        </button>

        <p className="center-align">
          Already have an account?
          <span
            style={{ fontWeight: "bold" }}
            className="teal-text text-darken-4"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
export default SignUpNext;
