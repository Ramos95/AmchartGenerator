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
          { category: "2020-02-01", value: 200, valuex: 400 },
          { category: "2020-03-01", value: 100, valuex: 300 },
          { category: "2020-04-01", value: 200, valuex: 400 },
          { category: "2020-05-01", value: 100, valuex: 300 },
          { category: "2020-06-01", value: 200, valuex: 400 },
          { category: "2020-07-01", value: 100, valuex: 300 },
          { category: "2020-08-01", value: 200, valuex: 400 },
          { category: "2020-09-01", value: 100, valuex: 300 },
          { category: "2020-10-01", value: 200, valuex: 400 },
          { category: "2020-11-01", value: 100, valuex: 300 },
          { category: "2020-12-01", value: 200, valuex: 400 },
        ]}
        series={["value", "valuex"]}
        chartType="column"
      />
    </div>
  );
}
