d3.csv('astronautas.csv', d3.autoType).then(data => {
    
    console.log(data)
    
    const hoursByCountry = d3.rollup(data, 
        v => d3.sum(v, d => d.mision_hs), // función de reducción: suma de horas de misión
        d => d.nacionalidad // clave de agrupación: país
    );
    console.log(hoursByCountry); // muestra el objeto con las horas de misión sumadas por país
    compareRadialChart(hoursByCountry, 'chart2'); // pasa el objeto resultante a la función del gráfico

    
});

function compareRadialChart(data, id) {
    // transforma el objeto de horas por país en un formato compatible con el gráfico de Chart.js
    let datos = {
        labels: Array.from(data.keys()),
        datasets: [
            {
                data: Array.from(data.values()),
            
            }
        ]
    }
    
    // Every ChartJs chart can have multiple layout options
    let options = {
        scale: {
            gridLines: {
                color: '#444',
        
    
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'right',
            labels: {
                fontColor: '#fff'
            }
        }
    }
    

    // Every ChartJS chart receives two arguments: the Canvas id to place the chart, and an object with: chart type, data to show, layout options object (optional)
    new Chart(id, { type: 'polarArea', data: datos, options });
}
