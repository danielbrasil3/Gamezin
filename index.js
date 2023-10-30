function go()
{
    var circle = document.querySelector('#circleProgress')
    var circle1 = document.querySelector('#circleProgress1')
    var circle2 = document.querySelector('#circleProgress2')
    var porcento = document.querySelector('#porcento').value
    var setasvg = document.querySelector('#seta')
    var number = document.querySelector('#numberProgress').value;
    document.querySelector('.percentage').innerHTML = number + '%'
    document.querySelector('.percentage1').innerHTML = number + '%'
    document.querySelector('.percentage2').innerHTML = number + '%'
    circle.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle1.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle2.style.strokeDashoffset = 226 - (226 * number) / 100;
    if (porcento <= 0) {
        setasvg.style.stroke = '#FF0000'
    } else {
        setasvg.style.stroke = '#4CE13F'
    }
}

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.periodo}</td>
        <td>${order.margemdelucro}</td>
        <td>${order.receita}</td>
        <td>${order.lucro}</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

const areaChartOptions = {
    series: [
        {
            name: "Vendas",
            data: [100,150,250,300,259,240,560,324,100,70,50,300],
            zIndex: 0
        },
        {
            name: "Gastos",
            data: [300,321,450,453,654,213,432,654,213,342,321,432],
            zIndex: 1
        }
    ],
    chart: {
        height: "91%",
        width: "100%",
        type: 'area',
        foreColor: "#5D7285",
        fontFamily: "Poppins",
        stacked: false,
        offsetX: -10,
        offsetY: -80,
        toolbar: {
            show: false,
        },
    },
    responsive: [{
        breakpoint: 1024,
        options: {},
    }],
    legend: {
        show: false
    },
    colors: ['#E3000E', '#4CE13F'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    
    tooltip: {
        shared: true,
        intersect: false,
        y: [{
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return "R$ " + y.toFixed(2);
              }
              return y;
              
            }
          }, {
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return "R$ " + y.toFixed(2);
              }
              return y;
              
            }
          }]
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();

