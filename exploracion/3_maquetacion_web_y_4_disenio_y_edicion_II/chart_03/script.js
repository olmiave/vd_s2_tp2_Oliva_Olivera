d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //Abro la data
  // Guardamos el svg generado en la variable chart

  let chart = Plot.plot({ //Elemento gráfico vectorial para la web (svg), guarda el gráfico en chart

   height:400,
   marginLeft: 100,
   marginBottom:100,
   width:800,
   
   y:{
    //tickFormat: d3.utcFormat("%Y"), 
    //domain: [d3.utcYear.offset(d3.anio_mision, -12), d3.utcYear()],
   
    label: "Año de Misión →",
    nice: true,
    labelAnchor: "center",
    labelOffset: 70,
     //range: [-10, 30]
    tickFormat: d3.format(".0f")
   },


   x:{

    padding: 0.5,
    align: 0.5,
    //type: "point", 
    axis: "bottom",
    domain: [-7, 25],
    grid:true,
    label: "← Mujeres · Hombres →",
    //labelAnchor: ,
    labelOffset: 60,
    tickFormat: Math.abs,
   
   },


   
    marks: [ 
      Plot.dot(data, Plot.stackX2 ({ y:"count"},
      
      {  
      //)
        y: d => d.anio_mision,
        r: 9,
        x: d => (d.genero === "masculino" ? 1: -1),
        fill: "genero"
       
      })),
     
      // Plot.text(data, Plot.stackX2 ({ y:"count", text:"count"},
      // {  
      // //)
      //   y: "anio_mision",
      //  // r: 9,
      //   x: d => (d.genero === "masculino" ? 1: -1),
      //   fill: "genero",
      //   dx:35,
      // })),
        
       // { strokeWidth: 0.5, fill: "blue" },

       Plot.ruleX([0])
    ],

    color: {
      range: ["orange", "#9700ff"],
    },
  
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      color: 'black',
      padding: '10px',
    },

   })


   //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})


