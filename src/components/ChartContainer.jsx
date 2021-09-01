import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ColumnChart from "../charts/XYChart";
import CircleChart from "../charts/CircleChart";
import LineChart from "../charts/LineChart";

export default function ChartContainer({
  chartData,
  chartType,
  chartContainerName,
  series
}) {
  const chartComponent = useRef(null);

  useLayoutEffect(() => {
    createChart();

    return () => {
      chartComponent.current.dispose();
    };
  }, [chartData]);

  function createChart() {
    am4core.useTheme(am4themes_animated);
    let chart = null;
    switch (chartType) {
      case "column":
        chart = new ColumnChart(
          chartData,
          "XYChart",
          series,
          chartContainerName,
          "date"
        );
        break;
      case "line":
        chart = new LineChart(
          chartData,
          "XYChart",
          series,
          chartContainerName,
          "date"
        );
        break;
      case "donut":
        chart = new CircleChart(
          chartData,
          "DonutChart",
          series,
          chartContainerName,
          "date"
        );
        break;
      default:
        break;
    }

    /* chart.data = chartData;
    chart.scrollbarX = new am4core.Scrollbar(); */
    chartComponent.current = chart.newChart;
  }

  return <div id={chartContainerName}></div>;
}
