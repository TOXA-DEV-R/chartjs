import React from "react";
import { Line } from "react-chartjs-2";

const RoomSalesRevenue = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const options = {
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: (ctx) => "Fill: " + ctx.chart.data.datasets[0].fill,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  return (
    <div className="dashboard-items__item">
      <Line data={data} options={options} />
    </div>
  );
};

export default RoomSalesRevenue;
