import { Line } from "react-chartjs-2";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { LineChartData } from "./ChartData";

chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins
);
const LineChart = () => {
  return (
    <div className=" w-full h-[40vh] flex items-center ">
      <Line
        data={LineChartData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          height: 200,

          scales: {
            y: {},
            x: {},
          },
        }}
      />
    </div>
  );
};

export default LineChart;
