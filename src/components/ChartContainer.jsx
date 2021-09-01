import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ColumnChart from "../charts/XYChart";
import CircleChart from "../charts/CircleChart";
import LineChart from "../charts/LineChart";

export default function ChartContainer({
  chartData,
  chartType,
  chartID,
  series
}) {
  const chartComponent = useRef(null);

  useLayoutEffect(() => {
    let chart = createChart();
    chartComponent.current = chart
    
    return () => {
      chart.dispose();
    };
  }, [chartData]);

  function createChart() {
    am4core.useTheme(am4themes_animated);
    
    switch (chartType) {
      case "column":
        console.log("lol")
       return new ColumnChart(
          chartData,
          "XYChart",
          series,
          chartID,
          "date"
        );

      case "line":
       return new LineChart(
          chartData,
          "XYChart",
          series,
          chartID,
          "date"
        );

      case "donut":
       return new CircleChart(
          chartData,
          "DonutChart",
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

  return <div id={chartID}></div>;
}
