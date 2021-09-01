import "./styles.css";
import ChartContainer from "./components/ChartContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ChartContainer
        chartID="chart"
        chartData={[
          { category: "2020-01-01", value: 100, valuex: 300 },
          { category: "2020-02-01", value: 200, valuex: 400 }
        ]}
        series={["value", "valuex"]}
        chartType="column"
      />
    </div>
  );
}
