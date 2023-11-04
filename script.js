const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 59, 75],
        backgroundColor: ['rgb(255, 99, 132, 0.35)', 'rgb(54, 162, 235, 0.35)', 'rgb(204, 101, 254, 0.35)', 'rgb(255, 206, 86, 0.35)'],
        borderWidth: 2,
        borderColor: ['rgb(255, 99, 132, 0.35)', 'rgb(54, 162, 235, 0.35)', 'rgb(204, 101, 254, 0.35)', 'rgb(255, 206, 86, 0.35)'],
        barThickness: 50,
        maxBarThickness: 75,
        minBarLength: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 20,
        suggestedMax: 100,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data",
        color: "seagreen",
        font: {
          weight: "bold",
          size: 24,
        },
      },
    },
    responsive: true,
    backgroundColor: 'seagreen'
  },
});
