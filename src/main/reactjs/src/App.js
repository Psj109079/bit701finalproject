import logo from './logo.svg';
import img from "./sexyhomin.gif";
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt="" src={img} style={{marginTop: "100px"}} className="App-logo"/>
      <br/><br/>
      <h2>Docker 배포 성공 기원~</h2>
    </div>
  );
}

export default App;
