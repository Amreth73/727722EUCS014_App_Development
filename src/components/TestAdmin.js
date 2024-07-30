import React, { useEffect } from "react";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import "./testAdmin.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);
const TestAdmin = () => {
  useEffect(() => {
    // You can add additional animations or effects here if needed
  }, []);

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Page Views",
        data: [30, 45, 60, 80, 50, 90],
        borderColor: "#ff6347",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Returning Visits", "New Visits"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#ff6347", "#4caf50"],
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h1>Party Event Management - Admin Dashboard</h1>
      <div className="charts">
        <div className="chart-container">
          <h2>Page Views Over Time</h2>
          <Line
            data={lineChartData}
            options={{ animation: { duration: 1000 } }}
          />
        </div>
        <div className="chart-container">
          <h2>Visit Breakdown</h2>
          <Pie
            data={pieChartData}
            options={{ animation: { animateScale: true } }}
          />
        </div>
        <div className="metrics">
          <h2>Metrics</h2>
          <ul>
            <li>
              Total Visits: <span>1,200</span>
            </li>
            <li>
              Page Views: <span>3,400</span>
            </li>
            <li>
              Average Time Per Page: <span>2m 30s</span>
            </li>
            <li>
              Bounce Rate: <span>15%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestAdmin;
