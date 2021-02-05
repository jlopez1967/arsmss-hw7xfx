import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import {
  Chart,
  LineSeries,
  ChartAnnotation,
  ColumnSeries,
  DateTime,
  Category,
  Tooltip,
  StackingColumnSeries,
  ILoadedEventArgs,
  ChartTheme,
  Legend
} from "@syncfusion/ej2-charts";
Chart.Inject(
  LineSeries,
  DateTime,
  StackingColumnSeries,
  ColumnSeries,
  Legend,
  Category,
  Tooltip,
  ChartAnnotation
);
import { Browser } from "@syncfusion/ej2-base";

/**
 * Sample for Multiple Axes
 */

let chart: Chart = new Chart({
  //Initializing Primary X Axis
  primaryXAxis: {
    valueType: "DateTime",
    interval: 1,
    labelFormat: "dd.MM.yyyy",
    labelRotation: -35,
    title: "primaryXAxis",
    majorTickLines: { width: 0 }
  },

  //Initializing Primary Y Axis
  primaryYAxis: {
    minimum: 0,
    maximum: 100,
    interval: 20,
    majorTickLines: { width: 0 },
    title: "primaryYAxis"
  },
  rows: [
    {
      height: "50%"
    },
    {
      height: "50%"
    }
  ],

  chartArea: {
    border: {
      width: 0.5
    }
  },
  // Initializing axes
  axes: [
    {
      rowIndex: 0,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis1",
      title: "SecondaryAxis1"
    },
    {
      rowIndex: 0,
      opposedPosition: true,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis2",
      title: "SecondaryAxis2"
    },
    {
      rowIndex: 0,
      opposedPosition: true,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis3",
      title: "SecondaryAxis3"
    },
    {
      plotOffset: 20,
      rowIndex: 1,
      opposedPosition: true,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis4",
      title: "SecondaryAxis4"
    },
    {
      plotOffset: 20,
      rowIndex: 1,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis5",
      title: "SecondaryAxis5"
    },
    {
      plotOffset: 20,
      rowIndex: 1,
      opposedPosition: true,
      majorTickLines: { width: 0 },
      name: "SecondaryAxis6",
      title: "SecondaryAxis6"
    }
  ],

  //Initializing Chart Series
  series: [
    {
      legendShape: "Circle",
      type: "StackingColumn",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 6.3 },
        { x: new Date(2016, 4, 1), y: 13.3 },
        { x: new Date(2016, 5, 1), y: 18.0 },
        { x: new Date(2016, 6, 1), y: 19.8 },
        { x: new Date(2016, 7, 1), y: 18.1 },
        { x: new Date(2016, 8, 1), y: 13.1 },
        { x: new Date(2016, 9, 1), y: 4.1 }
      ],
      width: 2,
      xName: "x",
      yName: "y",
      name: "Germany",
      yAxisName: "SecondaryAxis5"
    },
    {
      legendShape: "Circle",
      type: "StackingColumn",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 5.3 },
        { x: new Date(2016, 4, 1), y: 1.0 },
        { x: new Date(2016, 5, 1), y: 6.9 },
        { x: new Date(2016, 6, 1), y: 9.4 },
        { x: new Date(2016, 7, 1), y: 7.6 },
        { x: new Date(2016, 8, 1), y: 2.6 },
        { x: new Date(2016, 9, 1), y: 4.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis5",
      name: "Japan"
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 5.3 },
        { x: new Date(2016, 4, 1), y: 1.0 },
        { x: new Date(2016, 5, 1), y: 6.9 },
        { x: new Date(2016, 6, 1), y: 9.4 },
        { x: new Date(2016, 7, 1), y: 7.6 },
        { x: new Date(2016, 8, 1), y: 2.6 },
        { x: new Date(2016, 9, 1), y: 4.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis4",
      name: "France",
      marker: { visible: true }
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 5.3 },
        { x: new Date(2016, 4, 1), y: 4.0 },
        { x: new Date(2016, 5, 1), y: 5.9 },
        { x: new Date(2016, 6, 1), y: 8.4 },
        { x: new Date(2016, 7, 1), y: 6.6 },
        { x: new Date(2016, 8, 1), y: 3.6 },
        { x: new Date(2016, 9, 1), y: 5.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis6",
      name: "Australia"
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 15.0 },
        { x: new Date(2016, 4, 1), y: 15.0 },
        { x: new Date(2016, 5, 1), y: 15.0 },
        { x: new Date(2016, 6, 1), y: 15.0 },
        { x: new Date(2016, 7, 1), y: 15.0 },
        { x: new Date(2016, 8, 1), y: 15.0 },
        { x: new Date(2016, 9, 1), y: 15.0 }
      ],
      xName: "x",
      yName: "y",
      dashArray: "4,5",
      width: 2,
      // yAxisName: "SecondaryAxis1",
      name: "Africa"
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 5.3 },
        { x: new Date(2016, 4, 1), y: 4.0 },
        { x: new Date(2016, 5, 1), y: 5.9 },
        { x: new Date(2016, 6, 1), y: 8.4 },
        { x: new Date(2016, 7, 1), y: 6.6 },
        { x: new Date(2016, 8, 1), y: 3.6 },
        { x: new Date(2016, 9, 1), y: 5.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis1",
      name: "England"
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 12.3 },
        { x: new Date(2016, 4, 1), y: 11.0 },
        { x: new Date(2016, 5, 1), y: 12.9 },
        { x: new Date(2016, 6, 1), y: 14.4 },
        { x: new Date(2016, 7, 1), y: 13.6 },
        { x: new Date(2016, 8, 1), y: 15.6 },
        { x: new Date(2016, 9, 1), y: 17.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis2",
      name: "Europe"
    },
    {
      legendShape: "Circle",
      type: "Line",
      dataSource: [
        { x: new Date(2016, 3, 1), y: 15.3 },
        { x: new Date(2016, 4, 1), y: 14.0 },
        { x: new Date(2016, 5, 1), y: 15.9 },
        { x: new Date(2016, 6, 1), y: 18.4 },
        { x: new Date(2016, 7, 1), y: 16.6 },
        { x: new Date(2016, 8, 1), y: 13.6 },
        { x: new Date(2016, 9, 1), y: 15.9 }
      ],
      xName: "x",
      yName: "y",
      width: 2,
      yAxisName: "SecondaryAxis3",
      name: "NewZealand"
    }
  ],

  //Initializing Chart title
  title: "Chart Title",
  //Initializing User Interaction Tooltip
  tooltip: { enable: true },
  legendSettings: {
    visible: true
    //  position: "Custom",
    //  location: { x: 150, y: 50 },
    //  width: "100px"
  }
  // width: Browser.isDevice ? '100%' : '60%',
});
chart.appendTo("#container");
