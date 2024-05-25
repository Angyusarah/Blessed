import { barData } from "./ChartData";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64 flex items-center">
      <Bar data={barData} options={options}></Bar>
    </div>
  );
};

export default BarChart;
