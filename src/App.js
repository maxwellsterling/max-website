import "./App.css";
import Pdf from "./documents/Max_Resume_2022.pdf";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoMarkGithub } from "react-icons/go";
import { RiLinkedinBoxFill } from "react-icons/ri";

function App() {
  const iconStyle = {
    color: "white",
    fontSize: "25px",
    margin: "5px",

    "&:hover": {
      color: "grey"
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h3 className="btn-shell">
          <a className="btn resume" href={Pdf} target="_blank">
            MS
          </a>
        </h3>
      </div>
      <div className="App-body">
        <div className="no-touch software-developer-center">
          <b>
            <span className="software-developer-left">Software </span>
            <span className="software-developer-right">Developer</span>
          </b>
          <br />
          <a href="https://github.com/maxwellsterling">
            <GoMarkGithub
            onMouseOver={({target})=>target.style.color="grey"}
            onMouseOut={({target})=>target.style.color="white"}
            className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/maxwell-sterling-6611b71a1/">
            <RiLinkedinBoxFill
            onMouseOver={({target})=>target.style.color="grey"}
            onMouseOut={({target})=>target.style.color="white"}
            className="icon" />
          </a>
        </div>
        <h3 className="no-touch projects">
          Projects are currently in development
        </h3>
      </div>
      <div className="footer">
        <p>© 2022 Maxwell Sterling</p>
      </div>
    </div>
  );
}

export default App;
