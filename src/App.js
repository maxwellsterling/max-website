import "./App.css";
import Pdf from "./documents/Max_Resume_2022.pdf"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3 className="btn-shell">
          <a className="btn" href={Pdf} target="_blank">MS</a>
        </h3>
        <h3 className="no-touch">|</h3>
        <h3 className="btn-shell" >
          <a className="btn">Contact</a>
        </h3>
      </div>
      <div className="App-body">
        <div className="no-touch software-developer-center" >
          <b>
            <span className="software-developer-left">Software </span>
            <span className="software-developer-right">Developer</span>
          </b><br />
          <a className="btn"></a>
          <a className="btn"></a>
        </div>
        <h3 className="no-touch projects">
          Projects currently in development
        </h3>
      </div>
      <div className="footer">
        <p>© 2022 Maxwell Sterling</p>
      </div>
    </div>
  );
}

export default App;
