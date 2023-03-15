d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "ocupacion",
        y: "mision_hs",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
