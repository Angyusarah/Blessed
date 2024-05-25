export const LineChartData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Days ",
      data: [0, 5, 2, 3, 8, 1, 6, 7, 8, 9],
      fill: false,
      borderColor: "blue",
      borderWidth: 2,
      tension: 0.6,
    },
  ],
};

export const barData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Days",
      data: [3, 6, 8, 9, 4, 7, 5],
      backgroundColor: "#AA0000",
      borderWidth: 1,
      // borderRadius: Number.MAX_SAFE_INTEGER,
      // borderSkipped: false,
      barThickness: 45, // Set the exact width of the bars
    },
  ],
};
