d3.csv("astronautas.csv", d3.autoType).then(data => {
  console.log(data) // printea
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "anio_mision",
      }),
    ],
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
