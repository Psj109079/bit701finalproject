import img from "./sexyhomin.gif";
import bomb from "./bombberjoo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt="" src={img} style={{marginTop: "100px"}} className="App-logo"/>
        <img src={bomb} className="joo"/>
      <br/><br/>
      <h2>Docker 배포 성공?!?!?!?!?</h2>
    </div>
  );
}

export default App;
