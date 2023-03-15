d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'year',
        y: 'fertility',
        z: 'country',
        stroke: 'country',
        strokeWidth: 3,
        opacity: 0.5,
        // https://github.com/observablehq/plot#curves
        curve: 'natural',
      }),
    ],
  })
  d3.select('#chart').append(() => chart)
})
