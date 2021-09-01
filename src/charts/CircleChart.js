import ChartGenerator from "./ChartGenerator";
import { create, percent, options } from "@amcharts/amcharts4/core";
import { PieChart, PieSeries, Legend } from "@amcharts/amcharts4/charts";

options.onlyShowOnViewport = true;
options.commercialLicense = true;

class CircleChart extends ChartGenerator {
  constructor(
    chartDataSample,
    chartType,
    series,
    chartContainerName,
    axisType
  ) {
    super(chartDataSample, chartType, series, chartContainerName, axisType);

    this.instaceChart();
  }

  instaceChart() {
    this.newChart = create(this.chartContainerName, PieChart);
    this.newChart.data = this.chartDataSample;
    this.newChart.innerRadius = percent(
      this.chartType === "DonutChart" ? 50 : 0
    );
    this.createSeriesByName();
  }

  createSeriesByName() {
    for (let serie of this.series) {
      this.createSeries(serie);
    }
  }

  createSeries(seriesName) {
    let pieSeries = this.newChart.series.push(new PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";
    pieSeries.name = seriesName;
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.newChart.legend = new Legend();
    this.newChart.legend.maxHeight = 150;
    this.newChart.legend.scrollable = true;
    this.newChart.legend.maxWidth = undefined;
  }
}

export default CircleChart;
