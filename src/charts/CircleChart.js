import ChartGenerator from "./ChartGenerator";
import { create, percent, options } from "@amcharts/amcharts4/core";
import { PieChart, PieSeries, Legend } from "@amcharts/amcharts4/charts";

options.onlyShowOnViewport = true;
options.commercialLicense = true;

class CircleChart extends ChartGenerator {
  constructor(chartDataSample, chartType, series, chartid, axisType) {
    super(chartDataSample, chartType, series, chartid, axisType);

    this.instaceChart();
  }

  instaceChart() {
    this.newChart = create(this.chartid, PieChart);
    this.newChart.data = this.chartDataSample;
    this.newChart.innerRadius = percent(
      this.chartType === "DonutChart" ? 50 : 0
    );
    this.createSeriesByName();
    this.createCursor();
  }

  createSeriesByName() {
    for (let serie of this.series) {
      this.createSeries(serie);
    }
  }

  createSeries(seriesName) {
    let pieSeries = this.newChart.series.push(new PieSeries());
    console.log(pieSeries.dataFields);
    pieSeries.dataFields.value = seriesName;
    pieSeries.dataFields.category = "category";
    pieSeries.name = seriesName;
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.valueText = "[bold]{name}[/]";
  }
}

export default CircleChart;
