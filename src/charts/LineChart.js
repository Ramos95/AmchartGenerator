import ChartGenerator from "./ChartGenerator";
import { create, color } from "@amcharts/amcharts4/core";
import {
  XYChart,
  ValueAxis,
  LineSeries,
  CircleBullet,
} from "@amcharts/amcharts4/charts";

class LineChart extends ChartGenerator {
  constructor(chartDataSample, chartType, series, chartid, axisType) {
    super(chartDataSample, chartType, series, chartid, axisType);
    this.instaceChart();
  }

  /* instaceChart() {
    this.newChart = create(this.chartid, XYChart);
    this.newChart.data = this.chartDataSample;
    this.valueAxis = this.newChart.yAxes.push(new ValueAxis());
    this.createAxis("date");
    this.createSeriesByName();
    this.createCursor();
  } */

  createSeriesByName() {
    for (let serie of this.series) {
      this.createSerie(serie);
    }
  }

  createSerie(seriesName) {
    let series = this.newChart.series.push(new LineSeries());
    series.yAxis = this.valueAxis;
    series.dataFields.dateX = "category";
    series.dataFields.valueY = seriesName;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.name = seriesName;
    series.strokeWidth = 2;

    this.createPoint(series);
  }

  createPoint(serie) {
    let point = serie.bullets.push(new CircleBullet());
    point.circle.radius = 3;
    point.circle.strokeWidth = 2;

    point.adapter.add("stroke", (fill, target) => {
      let values = target.dataItem.values;
      if (values && values.valueY) {
        return values.valueY.value < 0 ? color("#ec4646") : fill;
      } else {
        return fill;
      }
    });
    point.adapter.add("fill", (fill, target) => {
      let values = target.dataItem.values;
      if (values && values.valueY) {
        return values.valueY.value < 0 ? color("#ec4646") : fill;
      } else {
        return fill;
      }
    });

    var bullethover = point.states.create("hover");
    bullethover.properties.scale = 1.3;
  }
}

export default LineChart;
