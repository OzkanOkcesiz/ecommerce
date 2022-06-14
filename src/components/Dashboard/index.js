import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useProduct } from "../../context/ProductContext";

const Dashboard = () => {
  const { orders } = useProduct();
  const data = {
    labels: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    datasets: [
      {
        label: "Satışlar",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        borderColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          62,
          75,
          68,
          85,
          79,
          orders
            .map((order) =>
              order.customerProducts.reduce((a, b) => a + b.productQuantity, 0)
            )
            .reduce((a, b) => a + b, 0),
        ],
      },
    ],
  };

  return (
    <div className="dashboard-content">
      <div className="chart-content">
        <div className="chart-bar">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
