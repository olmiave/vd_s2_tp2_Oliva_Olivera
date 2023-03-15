d3.csv("astronautas.csv", d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'edad_mision',
        sort: 'mision_hs',
        title: d => d.nacionalidad + '\n' + d.mision_hs,
      }),
    ],
    marginLeft: 50,
    width: 1000,
    color: {
      legend:true, 
    }
  })
  d3.select('#chart').append(() => chart)
})
