const locale = {
    decimal: ',',
    thousands: '.',
    grouping: [3],
  }
  d3.formatDefaultLocale(locale)
  
  d3.csv('astronautas.csv', d3.autoType).then(data => {
    let dataABC = data.filter(
      d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'Japon',
    )
  
    let chart = Plot.plot({
      marks: [
        Plot.areaY(dataABC, {
          y: d => d.anio_nacimiento,
          x: d => d.genero === "masculino" ? 1: d.genero==="femenino" ? -1:0,      
          offset: 'silhouette',
          fill: 'nacionalidad',
        }),
      ],
      x: {
        label: "← Mujeres · Hombres →",
        labelAnchor: "center",
        tickFormat: 'd',
      },
      y: {
        tickFormat: d3.format(',.0f'),
        grid: true,
      },
      marginLeft: 70,
      line: true,
      color: {
        legend: true,
      },
    })
    d3.select('#chart').append(() => chart)
  })
  