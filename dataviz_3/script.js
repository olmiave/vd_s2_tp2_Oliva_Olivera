d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data) //Abro la data
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({ //Elemento gráfico vectorial para la web (svg), guarda el gráfico en chart
  
     height:400,
     marginLeft: 100,
     marginBottom:100,
     width:1000,

     
     y:{
     
  
      label: "Año de Misión →",
      nice: true,
      labelAnchor: "center",
      labelOffset: 70,
      tickFormat: d3.format(".0f")
     },
  
  
     x:{
     
      padding: 0.5,
      align: 0.1,
      axis: "bottom",
      domain: [-7, 30],
      grid:false,
      label: null,
      
      //labelAnchor: 'left',
      ticks: false,
      labelOffset: 50,
      tickFormat: Math.abs,
     
     },
  
  
     
      marks: [ 
        Plot.dot(data, Plot.stackX(
        {  
        //)
          y: d => d.anio_mision,
          r: 10,
          x: d => (d.genero === "masculino" ? 1: -1),
          fill: "genero",
        })),
        Plot.text(data.filter(d => d.genero === "masculino"), 
          Plot.groupY( {x:"count", text: "count"},
          {
            y: "anio_mision",
            dx: 10
          })),
        Plot.text(data.filter(d => d.genero === "femenino"&&d.anio_mision==2010), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -290,    

          })),


          Plot.text(data.filter(d => d.genero === "femenino"&&d.anio_mision==2011), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -147,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2012), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -100,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2013), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -50,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2014), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -100,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2016), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -100,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2018), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -100,    

          })),

          Plot.text(data.filter(d => d.genero === "femenino"&& d.anio_mision==2019), 
          Plot.groupY( {x:"count", text: "count"},
          {
            x: -1,
            y: "anio_mision",
            dx : -100,    

          })),



          Plot.ruleX([0])
      
  
    
      ],
  
      color: {
        range: ["#fc4445", "#4d6d9a"],
        legend: 'ramp',
      },
    
      style: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        color: 'black',
        padding: '10px',
      },
  
     })
    d3.select('#chart').append(() => chart)
  })