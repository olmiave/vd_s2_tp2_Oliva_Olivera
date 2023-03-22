d3.csv("astronautas.csv", d3.autoType).then(data => {
  // Cuántas misiones espaciales hizo cada país
  console.log(data)
  let chart = Plot.plot({
    width: 1100,
    marks: [
      Plot.barX(data, 
        Plot.groupY(
          {x: 'count'}, //
          {y: 'nacionalidad', 
          sort: { y: "x", reverse: true}, 
          fill: 'ocupacion'},
          )
      ),
    ],
    x: {
      grid: true,
      label: "Cantidad de personas",
    },
    y: {
      label: "Pais de origen",
    },
    marginLeft: 150,
    color: {
      legend: true,
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize : 12,
      background: 'hsla(41, 36%, 62%, 0.61)',
    }
  })
  d3.select('#chart').append(() => chart)
})
