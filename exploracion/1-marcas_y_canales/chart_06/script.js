d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'ocupacion' },
        ),
      ),
    ],
    x: {
      label: 'Min of eva_mision_hs, Max of eva_mision_hs',
    },
    height: 300,
    width: 700,
    grid: true,
    nice: true,
    line: true,
    color:{
      legend: true,
    }
  })
  d3.select('#chart').append(() => chart)
})

