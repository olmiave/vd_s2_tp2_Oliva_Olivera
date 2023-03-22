d3.csv("astronautas.csv", d3.autoType).then(data => {
  // Cuántas horas en misiones espaciales hizo cada país
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'eva_mision_hs',
        //sort: 'mision_hs',
        grid: true,
        title: d => d.nacionalidad + '\n' + d.mision_hs,
      }),
    ],
    x: {      
      label: "Nacionalidades",
      domain: d3.sort(data, (a, b) => d3.ascending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
    },
    y: {
      grid: true,
      label: "Mision en horas",
    },
    marginLeft: 50,
    width: 1000,
    color: {
      legend:true, 
    }
  })
  d3.select('#chart').append(() => chart)
})
