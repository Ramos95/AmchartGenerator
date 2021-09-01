import {
  DateAxis,
  CategoryAxis,
  XYCursor,
  Legend
} from "@amcharts/amcharts4/charts";

class ChartGenerator {
  constructor(
    chartDataSample,
    chartType,
    series,
    chartID,
    axisType
  ) {
    this.chartDataSample = chartDataSample;
    this.chartType = chartType;
    this.axisType = axisType;
    this.series = series;
    this.chartid = chartID;
    this.instaceChart();
  }
  newChart = null;
  valueAxis = null;

  instaceChart() {
    /*  let chart = null;
    switch (this.chartType) {
      case "XYChart":
        chart = create(this.id, XYChart);
        chart.data = this.chartDataSample;
        this.newChart = chart;
        break;
      case "DonutChart":
        chart = create(this.id, PieChart);
        chart.data = this.chartDataSample;
        this.newChart = chart;
        break;
      default:
        console.log("lol");
        break;
    } */
  }

  createDateAxis() {
    let dateAxis = this.newChart.xAxes.push(new DateAxis());
    dateAxis.baseInterval = { timeUnit: "day", count: 1 };
    dateAxis.skipEmptyPeriods = true;
    dateAxis.renderer.minGridDistance = 80;
    dateAxis.markUnitChange = false;
    dateAxis.renderer.cellStartLocation = 0.2;
    dateAxis.renderer.cellEndLocation = 0.8;
  }

  createCategoryAxis() {
    let categoryAxis = this.newChart.xAxes.push(new CategoryAxis());
    //xAxis.title.text = this._axisTags.xAxisTag;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.markUnitChange = false;
  }

  createCursor() {
    this.newChart.cursor = new XYCursor();
    this.newChart.legend = new Legend();
    this.newChart.legend.position = "bottom";
  }

  createAxis = (axisType = "date") =>
    axisType === "category" ? this.createCategoryAxis() : this.createDateAxis();

  createSeries(seriesName) {
    throw new Error(
      "Please create a implementation on child chart",
      "Method not implemented"
    );
    /* let series = chart.series.push(new seriesType());
		series.name = seriesName;
		series.dataFields.valueY = "value";
		series.dataFields.dateX = "date";
		series.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]"; */
    //return series;
  }

  removeSeries() {}
}

export default ChartGenerator;
