
import { ChartOptions } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

interface LineChartOptions extends ChartOptions {
  scales?: {
    x?: {
      type: "category";
      labels?: string[];
      title: {
        display: boolean;
        text: string;
      };
      ticks?: {
        display: boolean;
      };
    };
    y?: {
      title: {
        display: boolean;
        text: string;
      };
      grid?: {
        display: boolean;
      };
      beginAtZero: boolean;
    };
  };
}


const LineChart= (props:any) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const chartData = {
    labels: months,
    datasets: props.data.map((product:any) => ({
      label: product.productName,
      data: product.monthlySales,
      borderColor: product.color,
      backgroundColor: product.color,
      borderWidth: 2,
      pointRadius: 0,
    })),
  };

  const options: LineChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: months,
        title: { display: false, text: 'Months' },
        ticks: { display: props.checker? false: true},
      },
      y: {
        title: { display: false, text: 'Number of Units Sold' },
        grid: {display: false},
        beginAtZero: true,
      },
    },
    plugins:{
       legend: {display: false}
    },
    elements: {
        line: {
          cubicInterpolationMode: 'monotone', // Set this to 'monotone' for smoother turning points
        },
      },
    
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;