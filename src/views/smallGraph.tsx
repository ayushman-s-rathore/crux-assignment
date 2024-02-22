import { Box, Typography } from "@mui/material";
import {  ChartOptions } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import lineData from '../assets/line.json'
import LineChart from "./lineChart";

export interface BarChartOptions extends ChartOptions {
  scales?: {
    x?: {
      title: {
        display: boolean;
        text: string;
      };
      grid: {
        display: boolean;
      };
      ticks: {
        display: boolean;
      };
    };
    y?: {
      title: {
        display: boolean;
        text: string;
      };
      beginAtZero: boolean;
      ticks: {
        callback: (value: any) => string;
      };
    };
  };
}


const SmallGraph = (props:any) => {
  const data2 = lineData.products

  const data = {
    labels: ['1', '2', '3', '4','5'],
    datasets: [
      {
        data: [30000, 45000, 20000, 50000,28000],
        backgroundColor: ['#FF5733', '#33FF57', '#5733FF', '#33A8FF','pink'],
        hoverBackgroundColor: ['#FF7F50', '#66FF66', '#8A2BE2', '#87CEEB','pink'],
      },
    ],
  };
  const small=true
  const options: BarChartOptions  = {
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
    maintainAspectRatio: false,
    responsive: true,
  
    plugins: {
      legend: { display: false},    
    }
  };
  const options2 = {
    maintainAspectRatio: false,
    responsive: true,
    outerHeight: "80%",
    cutout: "70%",
    plugins: {
      legend: { display: false},    
    }
  };
  if(props.back) props.graphStyle1.backgroundColor = props.back
  return (
    <>
      <div style={props.graphStyle1}>
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
            color={props.graphStyle1.backgroundColor!=='#FFF'?"#F4F4F4":"#5E5ADB"}
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
          marginTop={"1.5rem"}
          border={props.graphStyle1.backgroundColor!=='#FFF'?"1px solid #F1F1F2":"2px solid #5E5ADB"}
        />

        <Box height={0} width={"100"} border={"1px solid #E1E1E1"}  />
        {props.bar && <Box height={"12rem"} padding={"0.5rem 0.5rem"} >
        <Bar  data={data} options={options} />
        </Box>  }
        {props.pie && <Box height={"12rem"} padding={"0.5rem 0.5rem"} >
        <Doughnut  data={data} options={options2} />
        </Box>  }
        {props.line && <Box height={"10rem"} padding={"1rem 1rem"} >
        <LineChart data={data2} checker={small} />
        </Box> }
        
      </div>
    </>
  );
};

export default SmallGraph;
