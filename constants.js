"use strict";

const CHART = {
  title: {
    text: "",
    floating: true,
    style: {
      textOutline: "5px contrast",
    },
  },

  subtitle: {
    text: "",
    floating: true,
    y: 36,
    style: {
      textOutline: "5px contrast",
    },
  },

  mapView: {
    padding: [0, 5, 5, 5],
  },

  legend: {
    floating: true,
    backgroundColor: "#f0f8ff",
  },

  plotOptions: {
    mappoint: {
      // opacity: 0.5,
      keys: ["id", "lat", "lon", "name", "y"],
      marker: {
        lineWidth: 1,
        lineColor: "#000",
        symbol: "mapmarker",
        radius: 9,
      },
      dataLabels: {
        enabled: false,
      },
    },
  },

  tooltip: {
    headerFormat:
      '<span style="color:{point.color}">\u25CF</span> {point.key}<br/>',
    pointFormat: "{series.name}",
  },
};

const COSTLINE = {
  allAreas: true,
  name: "Coastline",
  states: {
    inactive: {
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  enableMouseTracking: false,
  showInLegend: false,
  borderColor: "blue",
  opacity: 0.3,
  borderWidth: 10,
  linecap: "round",
};

const COUNTRIES = {
  allAreas: true,
  name: "Countries",
  states: {
    inactive: {
      opacity: 1,
    },
  },
  dataLabels: {
    enabled: false,
  },
  enableMouseTracking: false,
  showInLegend: false,
  borderColor: "rgba(0, 0, 0, 0.25)",
};

const ALL_CITIES = {
  name: "",
  color: "rgb(124, 181, 236)",
  data: [
    ["ba", 43.86, 18.41, "Sarajevo"],
    ["ba", 43.34, 17.81, "Mostar"],
    ["ba", 44.53, 18.67, "Tuzla"],
    ["ba", 44.76, 17.18, "Banja Luka"],
    ["ba", 44.81, 15.86, "Bihać"],
  ],
  type: "mappoint",
};

const COMMON = {
  name: "",
  color: "rgb(124, 181, 236)",
  type: "mappoint",
};

const DATA = {
  section1: [["ba", 43.86, 18.41, "Sarajevo"]],
  section2: [["ba", 43.34, 17.81, "Mostar"]],
  section3: [["ba", 44.53, 18.67, "Tuzla"]],
  section4: [["ba", 44.76, 17.18, "Banja Luka"]],
  section5: [["ba", 44.81, 15.86, "Bihać"]],
};
