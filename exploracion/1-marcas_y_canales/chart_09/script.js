d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //Abro la data
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //Elemento gráfico vectorial para la web (svg), guarda el gráfico en chart


   height:300,
   x:{
    label: "Año de Misión →",
    nice: true,
    labelAnchor: "center"

   },
   y:{
    grid:true,
    label: "← Mujeres · Hombres →",
    labelAnchor: "center",
   // tickFormat: Maths.abs
   },
    marks: [ //representa cada país
      Plot.dot(data, Plot.stackY2 ({

        x: d => d.anio_mision , //Canal que usa
        y: d => d.genero === "masculino" ? 1: d.genero==="femenino" ? -1:0,
        fill: "genero"
       
      })),
     
     
       Plot.ruleY([0])
     // }),
    ],

  
    
    color: {
      range: ['Fuchsia', 'navy'],
      legend: true,
    },
  
   })
   
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})


