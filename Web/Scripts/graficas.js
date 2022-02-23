window.onload = main

function main() {
    graficaLineal()
    graficaCircular()
    graficaRadar()
    graficaHorizontal()
}

function graficaLineal() {
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [0, 20, 40, 60, 80, 100, 500, 1000, 1500, 2000],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "2018",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "2019",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "2020",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "2021",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 30, 45, 100, 120, 300, 500, 600],
                label: "2022",
                borderColor: "#c45850",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Número de piscinas vendidas por año'
            }
        }
    });
}

function graficaCircular() {
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Ganancias anuales'
            }
        }
    });
}

function graficaRadar() {
    new Chart(document.getElementById("radar-chart"), {
        type: 'radar',
        data: {
            labels: ["+20", "+35", "+45", "+60", "+"],
            datasets: [
                {
                    label: "2000-2010",
                    fill: true,
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    data: [8.77, 55.61, 21.69, 6.62, 6.82]
                }, {
                    label: "20010-2020",
                    fill: true,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    data: [25.48, 54.16, 7.61, 8.06, 4.45]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rango de edad preferente'
            }
        }
    });
}

function graficaHorizontal(){
    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
          labels: ["2018", "2019", "2020", "2021", "2022"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Ganancias netas mensuales'
          }
        }
    });
}