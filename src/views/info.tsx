import { Box, Typography } from "@mui/material";

import Small from "./small";
import { Chart as ChartJS, registerables } from "chart.js";

import { Bar } from "react-chartjs-2";
import { BarChartOptions } from "./smallGraph";

ChartJS.register(...registerables);

const Info = () => {
  const prop = {
    width: "12rem",
    border: "1px solid #E6E6e6",
  };
  const options: BarChartOptions = {
    scales: {
      x: {
        title: { display: false, text: "Categories" },
        grid: {
          display: false,
        },
        ticks: { display: false },
      },
      y: {
        title: { display: false, text: "Values" },
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value / 1000}K`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Set this to false to allow custom height
    plugins: {
      legend: { display: false },
    },
  };
  (options as any).barThickness = 4;
  return (
    <>
      <Box
        width="60%"
        height="11.5rem"
        bgcolor="#FFF"
        borderRadius="1rem"
        marginLeft="1.75rem"
        border="1px solid #E6E6E6"
        display={"flex"}
      >
        <Box
          sx={{
            width: "25%",
            height: "11.5rem",
            bgcolor: "#282828",
            borderBottomLeftRadius: "1rem",
            borderTopLeftRadius: "1rem",
            border: "1px solid #E7E7E7",
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "14rem",

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
                color="#F4F4F4"
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
                color="#757575"
              >
                14d
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="0.7rem"
                fontWeight={500}
                color="#757575"
              >
                30d
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "0.8rem 1rem 0rem 0rem",
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
            border={"1px solid #F1F1F2"}
          />

          <Box height={0} border={"1px solid #363636"} />
          <Box width={"95%"} height={"80%"} margin={"0.5rem 0.5rem"}>
            <Bar
              data={{
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                  {
                    label: "Values",
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "rgba(255,99,132,1)",
                      "rgba(255,206,86,1)",
                      "rgba(54,162,235,1)",
                    ],
                    borderColor: [
                      "rgba(75,192,192,0.2)",
                      "rgba(255,99,132,0.2)",
                      "rgba(255,206,86,0.2)",
                      "rgba(54,162,235,0.2)",
                    ],

                    borderWidth: 1,
                    hoverBackgroundColor: [
                      "rgba(75,192,192,0.2)",
                      "rgba(255,99,132,0.2)",
                      "rgba(255,206,86,0.2)",
                      "rgba(54,162,235,0.2)",
                    ],
                    hoverBorderColor: [
                      "rgba(75,192,192,0.2)",
                      "rgba(255,99,132,0.2)",
                      "rgba(255,206,86,0.2)",
                      "rgba(54,162,235,0.2)",
                    ],
                    data: [30000, 45000, 20000, 50000, 28000],
                  },
                ],
              }}
              options={options}
            ></Bar>
          </Box>
        </Box>
        <Small prop={prop} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "61%",
            height: "11.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "auto",
              justifyContent: "space-between",

              alignItems: "center",
              height: "1.6rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "auto",

                alignItems: "center",
                height: "1.6rem",
              }}
            >
              <Typography
                sx={{
                  color: "#5e5adb",
                  fontSize: "0.6875rem",
                  padding: " 0rem 0.5rem 0rem 1.5rem",
                  fontFamily: "inter",
                }}
              >
                Today
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.84718 0.135185C8.05094 0.315421 8.05094 0.607657 7.84718 0.787893L4.36892 3.86482C4.27108 3.95137 4.13837 4 4 4C3.86162 4 3.72891 3.95137 3.63107 3.86482L0.15287 0.787893C-0.0509568 0.607657 -0.0509567 0.315421 0.15287 0.135184C0.35658 -0.0450619 0.686898 -0.0450619 0.890608 0.135185L4 2.88575L7.10933 0.135185C7.31308 -0.0450616 7.64343 -0.0450616 7.84718 0.135185Z"
                  fill="#5E5ADB"
                />
              </svg>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: "1rem",
                gap: "0.18rem",
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
          <Box height={0} border={"1px solid #E1E1E1"} />
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.50)",
              overflowY: "scroll",
              scrollbarWidth: "thin",
              scrollbarColor: "#cdcdcd",
              fontWeight: "400",
              fontSize: "0.75rem",
              padding: " 1.2rem 1.5rem 2rem 1.5rem",
              fontFamily: "inter",
            }}
          >
            Based on the provided data, the most effective hour of the day to
            send an email across all stores for all time, with the highest
            engagement after opening, is at 15:00(3 PM), with a total of 5041
            emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM)
            with <b style={{ color: "rgba(0, 0, 0, 0.70)" }}>5007</b> and{" "}
            <b style={{ color: "rgba(0, 0, 0, 0.70)" }}>4785</b> emails opened
            respectively. There is a noticeable drop in{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Info;
