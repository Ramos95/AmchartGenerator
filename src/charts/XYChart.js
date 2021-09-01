import ChartGenerator from "./ChartGenerator";
import { create, color, options } from "@amcharts/amcharts4/core";
import { XYChart, ValueAxis, ColumnSeries } from "@amcharts/amcharts4/charts";

options.onlyShowOnViewport = true;
options.commercialLicense = true;

class ColumnChart extends ChartGenerator {
  constructor(
    chartDataSample,
    chartType,
    series,
    chartid,
    axisType
  ) {
    super(chartDataSample, chartType, series, chartid, axisType);
    this.instaceChart();
  }

  instaceChart() {
   
    this.newChart = create(this.chartid, XYChart);
    this.newChart.data = this.chartDataSample;
    this.valueAxis = this.newChart.yAxes.push(new ValueAxis());
    this.createAxis("date");
    this.createSeriesByName();
    this.createCursor();
  }

  createSeriesByName() {
    for (let serie of this.series) {
      this.createSerie(serie);
    }
  }

  createSerie(seriesName) {
    let series = this.newChart.series.push(new ColumnSeries());
    series.yAxis = this.valueAxis;
    series.dataFields.dateX = "category";
    series.dataFields.valueY = seriesName;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.name = seriesName;

    this.roundSeriesBars(series);
    this.colorSeriesBars(series);

    //series.columns.template.fill = am4core.color("#5a5");
    /*  series.columns.template.adapter.add("fill", (fill, target) => {
      if (target.dataItem && target.dataItem.valueY < 0) {
        return am4core.color("#ec4646");
      } else {
        return this._isSingleSerie
          ? this._chart.colors.getIndex(target.dataItem.index)
          : fill;
      }
    });
    series.columns.template.width = am4core.percent(100);
    series.columns.template.tooltipText = this._isSingleSerie
      ? "{categoryX}: [bold]{valueY}[/]"
      : `[{categoryX}]: [bold]{valueY}[/]`;

    series.events.on("hidden", this.arrangeColumns.bind(this));
    series.events.on("shown", this.arrangeColumns.bind(this));

    let bullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false; */
    //bullet.dy = 30;
    //bullet.locationY = 0.5;
    /*  bullet.label.text = "{valueY}";
    bullet.label.fill = am4core.color("#ffffff");

    bullet.label.adapter.add("dy", (dy, target) => {
      if (target.dataItem && target.dataItem.valueY < 0) {
        return target.dataItem.valueY > -1000 ? -10 : -30;
      } else {
        return target.dataItem.valueY < 1000 ? 10 : 30;
      }
    }); */

    /* var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    this._chart.scrollbarX = scrollbarX;
    this._chart.scrollbarX.parent = this._chart.bottomAxesContainer; */
  }

  roundSeriesBars(series) {
    series.columns.template.column.adapter.add(
      "cornerRadiusTopLeft",
      this.topRadius
    );
    series.columns.template.column.adapter.add(
      "cornerRadiusTopRight",
      this.topRadius
    );
    series.columns.template.column.adapter.add(
      "cornerRadiusBottomLeft",
      this.bottomRadius
    );
    series.columns.template.column.adapter.add(
      "cornerRadiusBottomRight",
      this.bottomRadius
    );
  }

  colorSeriesBars(series) {
    series.columns.template.adapter.add("fill", (fill, target) => {
      if (target.dataItem && target.dataItem.valueY < 0) {
        return color("#ec4646");
      } else {
        return this._isSingleSerie
          ? this.newChart.colors.getIndex(target.dataItem.index)
          : fill;
      }
    });
  }

  topRadius(radius, target) {
    return target.dataItem && target.dataItem.valueY < 0 ? 0 : 5;
  }

  bottomRadius(radius, target) {
    return target.dataItem && target.dataItem.valueY > 0 ? 0 : 5;
  }
}

export default ColumnChart;
