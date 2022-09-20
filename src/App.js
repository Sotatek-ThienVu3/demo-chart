import "./App.css";
import ChartLine from "./chartLine";
import RadarChart from "./radarChart";

function App() {
  return (
    <div className="App">
      <div className="boxChart">
        <h3>Line Chart</h3>
        <ChartLine />
      </div>
      <div className="boxChart">
        <h3>Radar Chart</h3>
        <RadarChart />
      </div>
    </div>
  );
}

export default App;
