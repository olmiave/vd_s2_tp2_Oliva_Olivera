d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "ocupacion", y: "edad_mision", stroke: "status" })],
    r: { range: [0, 50] },
    nice: true,
    line: true,
    grid: true,
    zero: true,
  });
  d3.select("#chart").append(() => chart);
});
