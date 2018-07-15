import { Color, colors } from '../../colors';
export const demodata = [
  {
    type: 'line',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: '# of Votes',
          data: [6, 7, 3, 5, 2, 3],
          lineTension: 0,
          backgroundColor: colors['teal'].alpha(0.2).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: '# of People',
          data: [3, 1, 6, 7, 4, 6],
          lineTension: 0,
          backgroundColor: colors['blue'].alpha(0.2).toString(),
          borderColor: colors['blue'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            display: true
          }
        ]
      },
      legend: {
        display: false
      }
    }
  },
  {
    type: 'bar',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: 'Revenue this year',
          data: [6, 17, 11, 5, 12, 3],
          lineTension: 0.3,
          backgroundColor: colors['blue'].alpha(0.9).toString(),
          borderColor: colors['blue'].toString(),
          borderWidth: 2,
          pointRadius: 2
        },
        {
          label: 'Revenue last year',
          data: [3, 10, 5, 9, 10, 4],
          lineTension: 0.3,
          backgroundColor: colors['cyan'].alpha(0.8).toString(),
          borderColor: colors['cyan'].toString(),
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            display: true
          }
        ]
      },
      legend: {
        display: false
      }
    }
  },
  {
    type: 'bar',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          type: 'line',
          label: 'Revenue this year',
          data: [6, 17, 11, 5, 12, 3],
          lineTension: 0.3,
          backgroundColor: colors['orange'].alpha(0.1).toString(),
          borderColor: colors['orange'].toString(),
          borderWidth: 2,
          pointRadius: 1,
          fill: true
        },
        {
          type: 'bar',
          label: 'Revenue last year',
          data: [3, 10, 5, 9, 10, 4],
          lineTension: 0.3,
          backgroundColor: colors['purple'].alpha(0.6).toString(),
          borderColor: colors['purple'].toString(),
          borderWidth: 2,
          pointRadius: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            display: true
          }
        ]
      },
      legend: {
        display: true
      }
    }
  },
  {
    type: 'pie',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: '# of Votes',
          data: [6, 7, 3, 5, 2, 3],
          lineTension: 0,
          backgroundColor: [
            colors['teal'].alpha(0.8).toString(),
            colors['cyan'].alpha(0.8).toString(),
            colors['blue'].alpha(0.8).toString(),
            colors['orange'].alpha(0.8).toString(),
            colors['yellow'].alpha(0.8).toString(),
            colors['red'].alpha(0.8).toString()
          ]
        }
      ]
    },
    options: {
      legend: {
        display: true
      }
    }
  },
  {
    type: 'line',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: '# of Votes',
          data: [6, 4, 3, 5, 2, 3],
          backgroundColor: colors['teal'].alpha(0.2).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: true
        },
        {
          label: '# of People',
          data: [3, 1, 6, 6.5, 4, 6],
          backgroundColor: colors['blue'].alpha(0.2).toString(),
          borderColor: colors['blue'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: true
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            display: true
          }
        ]
      },
      legend: {
        display: true
      }
    }
  },
  {
    type: 'scatter',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: 'People',
          data: [
            { x: 1, y: 2 },
            { x: 1.5, y: 8 },
            { x: 2, y: 3 },

            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 1 },
            { x: 4.5, y: 7 },
            { x: 4, y: 6 },
            { x: 5, y: 2 },
            { x: 4, y: 4 },
            { x: 6, y: 1 }
          ],
          backgroundColor: colors['teal'].alpha(1).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: true
        },
        {
          label: 'Robots',
          data: [
            { x: 1, y: 8 },
            { x: 2, y: 5 },
            { x: 2.5, y: 2 },

            { x: 3, y: 1 },
            { x: 3, y: 3 },
            { x: 4, y: 6 },
            { x: 4, y: 3 },
            { x: 5.5, y: 1 },
            { x: 5, y: 7 },
            { x: 7, y: 5 },
            { x: 6, y: 2 }
          ],
          backgroundColor: colors['red'].alpha(1).toString(),
          borderColor: colors['red'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: true
        }
      ]
    }
  },
  {
    type: 'bubble',
    data: {
      labels: ['China', 'Russia', 'US', 'UK', 'France', 'Canada'],
      datasets: [
        {
          label: 'People',
          data: [
            { x: 1, y: 2, r: 12 },
            { x: 1.5, y: 4, r: 8 },
            { x: 2, y: 3, r: 17 },
            { x: 3, y: 4, r: 15 },
            { x: 2.5, y: 8, r: 12 },
            { x: 4, y: 7, r: 13 },
            { x: 4, y: 5, r: 7 },
            { x: 5.5, y: 6, r: 8 },
            { x: 6, y: 5.5, r: 13 },
            { x: 7, y: 2.5, r: 30 },
            { x: 6.5, y: 7, r: 5 },
            { x: 4, y: 3, r: 15 }
          ],
          backgroundColor: colors['teal'].alpha(1).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: true
        }
      ]
    }
  }
];
