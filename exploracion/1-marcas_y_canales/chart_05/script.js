d3.csv("astronautas.csv", d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        fill: 'ocupacion',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
    },
    x: {
      grid: true,
    },
    height: 500,
    marginLeft: 150,
    color: {
      legend: true,
    }
  })
  d3.select('#chart').append(() => chart)
})
