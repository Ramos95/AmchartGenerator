import React, { useRef, useLayoutEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ColumnChart from "../charts/XYChart";
import CircleChart from "../charts/CircleChart";
import LineChart from "../charts/LineChart";
import Select from "./Select";
import CHART_OPTIONS from "../ChartTypes";

export default function ChartContainer({
  chartData,
  chartType,
  chartID,
  series,
}) {
  const [selectedType, setSelectedType] = useState(CHART_OPTIONS[0]);
  const chartComponent = useRef(null);

  useLayoutEffect(() => {
    let chart = createChart();
    chartComponent.current = chart;

    return () => {
      chart.newChart.dispose();
    };
  }, [chartData, selectedType]);

  function createChart() {
    am4core.useTheme(am4themes_animated);

    switch (selectedType.name) {
      case "Column Chart":
        return new ColumnChart(
          chartData,
          selectedType.type,
          series,
          chartID,
          "date"
        );

      case "Line Chart":
        return new LineChart(
          chartData,
          selectedType.type,
          series,
          chartID,
          "date"
        );

      case "Pie Chart":
        return new CircleChart(
          chartData,
          selectedType.type,
          series,
          chartID,
          "date"
        );

      default:
        break;
    }

    /* chart.data = chartData;
    chart.scrollbarX = new am4core.Scrollbar(); */
  }

  return (
    <div className="chart-wrapper">
      <Select
        onChange={setSelectedType}
        options={CHART_OPTIONS}
        optionLabel={"name"}
        defaultValue={"Column Chart"}
      />
      <div id={chartID} className="chart-container"></div>
    </div>
  );
}
