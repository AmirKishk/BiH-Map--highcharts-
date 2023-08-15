"use strict";

const mapIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".map");
elements.forEach((el) => mapIntersectionObserver.observe(el));

(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/ba/ba-all.topo.json"
  ).then((response) => response.json());

  Highcharts.mapChart("map1", {
    ...CHART,
    chart: {
      map: topology,
      margin: 1,
      backgroundColor: "#f0f8ff",
    },
    series: [COSTLINE, COUNTRIES, ALL_CITIES],
  });

  Highcharts.mapChart("map2", {
    ...CHART,
    chart: {
      map: topology,
      margin: 1,
      backgroundColor: "#f0f8ff",
    },
    series: [COSTLINE, COUNTRIES, ALL_CITIES],
  });
})();

const replaceData = function (newData) {
  const chart = Highcharts.charts[1];
  chart?.series[2].update({
    data: [],
  });
  chart?.series[2].update(newData);
};

// -----------------------------
