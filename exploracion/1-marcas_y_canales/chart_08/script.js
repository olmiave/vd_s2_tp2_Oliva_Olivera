d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'anio_mision',
        y: 'edad_mision',
        //z: 'status',
        stroke: 'anio_nacimiento',
      }),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },    
    color: {
      legend:true, 
    }
  })
  d3.select('#chart').append(() => chart)
})