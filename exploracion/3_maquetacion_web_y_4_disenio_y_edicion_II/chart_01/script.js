d3.csv("astronautas.csv", d3.autoType).then(data => {
  // Cuántas misiones espaciales hizo cada país
  console.log(data)
  let chart1 = Plot.plot({
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
      Plot.text(data,         
        Plot.groupY(
        {x: 'count', text:"count"},  //
        {y: 'nacionalidad', dx:10},)),
    ],
    x: {
      grid: true,
      label: "Cantidad de astronautas",
    },
    y: {
      label: null,
    },
    marginLeft: 140,
    color: {
      legend: true,
      range:["#fc4445", "#4d6d9a","#86b3d1", "#cebc81", "#edb5bf"],
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize : 12,
      background: "transparent",
    }
  })
  d3.select('#chart').append(() => chart1)


  // 2 /////////////////////////////////////
  console.log(data)
  let chart2 = Plot.plot({
    width: 1100,
    marks: [
      Plot.barX(
        data.filter(d=>(d.nacionalidad=="U.S.S.R/Rusia" || d.nacionalidad=='EE.UU.' || d.nacionalidad=='China' || d.nacionalidad=='Japon' )&&d.ocupacion=='comandante'),
        Plot.groupY(
          {x: 'count'}, //
          {y: 'nacionalidad', 
          sort: { y: "x", reverse: true}, 
          fill: "ocupacion"},
          )
          
      ),
      Plot.text(  
        data.filter(d=>(d.nacionalidad=="U.S.S.R/Rusia" || d.nacionalidad=='EE.UU.' || d.nacionalidad=='China' || d.nacionalidad=='Japon' )&&d.ocupacion=='comandante'),       
        Plot.groupY(
        {x: 'count', text:"count"},  //
        {y: 'nacionalidad', dx:10},
        )),
    ],
    x: {
      grid: true,
      label: "Cantidad de astronautas",
    },
    y: {
      label: null,
    },
    marginLeft: 140,
   // marginRight: 150,
    color: {
      legend: true,
      range:["#fc4445"],
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize : 12,
      background: "transparent",
    }
  })
  d3.select('#chart').append(() => chart2)
})
