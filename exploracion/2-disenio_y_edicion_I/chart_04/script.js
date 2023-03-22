d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "ocupacion", y: "edad_mision", fill:"genero" })],
    r: { range: [0, 60] },
    nice: true,
    line: true,
    grid: true,
    zero: true,
    color: {
      legend:true,
    }
  });

  d3.select("#chart").append(() => chart);
});


//hacer que la edad vaya entre 30 y 60
// hacer fill a los puntos