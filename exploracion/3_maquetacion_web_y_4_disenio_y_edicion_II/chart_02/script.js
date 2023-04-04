// edades
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //Abro la data
  let chart1 = Plot.plot({
    height: 105,
    width: 1110,
    marks: [
      Plot.barX(data, 
        Plot.groupY({
        x1: 'min', 
        x2: 'max',
      }, 
      {
        x:"edad_mision",
        y:"",
        //fill: "pink"
      },
     ),
    ),
    Plot.barX(data, 
      Plot.groupY({
      x1: 'min', 
      x2: 'max',
    }, 
    {
      fill: d => d.edad_mision <= 46.5 ? "#fc4445" : "#86b3d1",
      x:"edad_mision",
      y:"",
      //text: d => `${d.edad_mision}`  
    },
   ),
  ),
  
      //Plot.ruleX([0]),
    ],
    x:{
      label: 'Min, max',
      ticks:20,
      //domain: [30, 63],
    },
    color: {
      legend:true,
      range: ["#fc4445" , "#86b3d1"]
    },
    style:{
      fontFamily: "Arial",
      fontSize : 12,
    }
  })

   //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select('#chart1').append(() => chart1)
})










// nacionalidad
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data); //Abro la data
  let chart2 = Plot.plot({
    height: 50,
    width: 1100,
    marks: [
      Plot.barX(
        data.filter(d=>(d.nacionalidad == "EE.UU." || d.nacionalidad == "U.S.S.R/Rusia")),
        Plot.stackX(Plot.groupZ({ x: "proportion" }, { fill: "nacionalidad" }))
      ),
      Plot.text(
        data.filter(d=>(d.nacionalidad == "EE.UU." || d.nacionalidad == "U.S.S.R/Rusia")),
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion", text: "count" },
            { z: "nacionalidad"}
          )
        )
      ),
      Plot.text(
        data.filter(d=>(d.nacionalidad == "EE.UU." || d.nacionalidad == "U.S.S.R/Rusia")),
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion",text:"first"},
            { z: "nacionalidad", text:"nacionalidad", dy:12}
          )
        )
      ),
    ],
    axis:null,
    x: {

    },
    color: {
      legend: true,
      range: ["#fc4445" , "#86b3d1"]
    },
    style:{
      fontFamily: 'Arial',
      fontSize : 12,
    }
  });

  //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select("#chart2").append(() => chart2);
});













//genero
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data); //Abro la data
  let chart3 = Plot.plot({
    height: 50,
    width: 1100,
    marks: [
      Plot.barX(
        data,
        Plot.stackX(Plot.groupZ({ x: "proportion" }, { fill: "genero" }))
      ),
      Plot.text(
        data,
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion", text: "count" },
            { z: "genero"}
          )
        )
      ),
      Plot.text(
        data,
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion",text:"first"},
            { z: "genero", text:"genero", dy:12}
          )
        )
      ),
    ],
    axis:null,
    x: {

    },
    color: {
      legend: true,
      range: [ "#86b3d1" , "#fc4445" ]
    },
    style:{
      fontFamily: "Arial",
      fontSize : 12,
    }
  });

  //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select("#chart3").append(() => chart3);
});












// status
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data); //Abro la data
  let chart4 = Plot.plot({
    height: 50,
    width: 1100,
    marks: [
      Plot.barX(
        data,
        Plot.stackX(Plot.groupZ({ x: "proportion" }, { fill: "status" }))
      ),
      Plot.text(
        data,
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion", text: "count" },
            { z: "status"}
          )
        )
      ),
      Plot.text(
        data,
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion",text:"first"},
            { z: "status", text:"status", dy:12}
          )
        )
      ),
    ],
    axis:null,
    x: {

    },
    color: {
      legend: true,
      range: [ "#86b3d1" , "#fc4445" ]
    },
    style:{
      fontFamily: "Arial",
      fontSize : 12,
    }
  });

  //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select("#chart4").append(() => chart4);
});














//ocupacion
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data); //Abro la data
  let chart5 = Plot.plot({
    height: 50,
    width: 1100,
    marks: [
      Plot.barX(
        data.filter(d=>(d.ocupacion == "ingeniero aeroespacial" || d.ocupacion == "comandante")),
        Plot.stackX(Plot.groupZ({ x: "proportion" }, { fill: "ocupacion" }))
      ),
      Plot.text(
        data.filter(d=>(d.ocupacion == "ingeniero aeroespacial" || d.ocupacion == "comandante")),
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion", text: "count" },
            { z: "ocupacion"}
          )
        )
      ),
      Plot.text(
        data.filter(d=>(d.ocupacion == "ingeniero aeroespacial" || d.ocupacion == "comandante")),
        Plot.stackX(
          Plot.groupZ(
            { x: "proportion",text:"first"},
            { z: "ocupacion", text:"ocupacion", dy:12}
          )
        )
      ),
    ],
    axis:null,
    x: {

    },
    color: {
      legend: true,
      range: [ "#86b3d1" , "#fc4445" ]
    },
    style:{
      fontFamily: "Arial",
      fontSize : 12,
    }
  });

  //d3.range(100).map((d) => Math.random() * 100 + 1),
  // Agregamos chart al div#chart de index.html
  d3.select("#chart5").append(() => chart5);
});

