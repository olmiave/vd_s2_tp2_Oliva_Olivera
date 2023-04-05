d3.csv('astronautas.csv', d3.autoType).then(data => {
    let dataABC = data.filter(
        d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'Japon',
      )
    
    let chart = Plot.plot({
     
    
      marks: [
        Plot.dot(dataABC, {
          x: 'edad_mision',
          y: 'anio_mision',
          fill: 'nacionalidad',
          stroke: 'nacionalidad',

          r: 'anio_mision',
        }),
      ],
      
      grid: true,
      line: true,
      nice: true,
      color: {
        legend: true,
      },
    })
  
    d3.select('#chart').append(() => chart)
  })
  