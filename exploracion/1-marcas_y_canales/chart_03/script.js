d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { stroke: "genero", x:"mision_hs", y: "edad_mision" })],
    x: {
      grid: true,
      line: true,
      zero: true,
      nice: true,
    },
    y: {
      zero: true,
      nice: true,
      line: true,
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
});
