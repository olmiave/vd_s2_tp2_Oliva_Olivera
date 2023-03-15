d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'fertility', y: 'cluster' },
        ),
      ),
    ],
    x: {
      label: 'Min of fertility, Max of fertility',
    },
    height: 200,
    width: 600,
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart').append(() => chart)
})
