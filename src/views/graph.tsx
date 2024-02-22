import { Box, Typography } from "@mui/material";
import {  Chart as ChartJS, registerables } from 'chart.js';

import { Bar } from 'react-chartjs-2'
import { BarChartOptions } from "./smallGraph";


ChartJS.register(...registerables)



const Graph = () => {
  
  const data = {
    
    labels: ["A","B","C","D","E"],
    datasets: [{
      data: [20000,30000,45000,28000,35000],
      backgroundColor: ['#FF5733', '#33FF57', '#5733FF', '#33A8FF','pink']
    }],
  };
  console.log(data);
  const options: BarChartOptions = {
    scales: {
      x: { title: { display: false, text: 'Categories' },
          grid: {
            display: false,
          },
          ticks: {display: false},
          },
      y: { title: { display: false, text: 'Values' }, 
          beginAtZero: true,
          ticks: {
            callback: (value: any) => `${value / 1000}K`,
          },
          
        },
    },
    responsive: true,
    maintainAspectRatio: false, // Set this to false to allow custom height
 
    plugins: {
      legend: { display: false}
    }   
  };
  (options as any).barThickness = 4;

 
  return (
    <>
      <Box
        bgcolor={"#FFF"}
        height={"auto"}
        width={"100%"}
        borderRadius={"1rem"}
        border={"1px solid #E7E7E7"}
        marginTop={"2rem"}
        boxShadow={"0px 0px 6px 0px rgba(0, 0, 0, 0.10)"}
      >
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          
          <Typography
            color="#5E5ADB"
            fontFamily="Inter"
            fontSize="0.7rem"
            fontWeight={600}
          >
            7d
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="0.7rem"
            fontWeight={500}
            color="#BBB"
          >
            14d
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="0.7rem"
            fontWeight={500}
            color="#BBB"
          >
            30d
          </Typography>
        </Box>
          <Box
            sx={{
              padding: "1rem 1rem 0rem 0rem",
              display: "flex",
              gap: "0.2rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          height={0}
          width={40}
          border={"2px solid #5E5ADB"}
        />

        <Box height={0} border={"1px solid #E1E1E1"} />
         
      {/* Bar Chart */}
      <Box height={"21rem"} padding={"1rem 0.5rem"}>
      <Bar data={data} options={options} ></Bar>

      </Box>
    
      </Box>
    </>
  );
};

export default Graph;
