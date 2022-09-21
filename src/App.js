import "./App.css";
import ChartLine from "./chartLine";
import RadarChart from "./radarChart";

function App() {
  return (
    <div className="App">
      <div className="boxChart">
        <h3>Line Chart</h3>
        <div className="chart">
          <ChartLine />
        </div>
      </div>
      <div className="boxChart">
        <h3>Radar Chart</h3>
        <div className="chart">
          <RadarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
