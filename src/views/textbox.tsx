import { Box, Typography } from "@mui/material";

const Textbox = (props: any) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: props.width,
          borderRadius: "1rem",
          backgroundColor: props.back,
          boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
          height: "11.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "auto",
            justifyContent: "space-between",

            alignItems: "center",
            height: "3rem",
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
                color: "#B5B5B5",
                fontSize: "0.6875rem",
                fontWeight: "600",
                padding: " 0rem 0.5rem 0rem 1.5rem",
                fontFamily: "inter",
              }}
            >
              Today
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.0387 0.137077C7.22147 0.319836 7.22147 0.616163 7.0387 0.798923L3.9187 3.91892C3.83094 4.00669 3.7119 4.056 3.58778 4.056C3.46365 4.056 3.34461 4.00669 3.25685 3.91892L0.136899 0.798922C-0.0459328 0.616163 -0.0459328 0.319836 0.136899 0.137077C0.319627 -0.0456927 0.615923 -0.0456927 0.798652 0.137077L3.58778 2.92615L6.37685 0.137077C6.55962 -0.0456924 6.85593 -0.0456924 7.0387 0.137077Z"
                fill="#B5B5B5"
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

        <Typography
          sx={{
            color: props.back!=='#FFF'?'#FFF':'rgba(0, 0, 0, 0.65)',
            overflowY: "scroll",

            fontWeight: "400",
            fontSize: "0.75rem",
            padding: " 0rem 1.5rem 2rem 1.5rem",
            fontFamily: "inter",
            "&::-webkit-scrollbar": {
              width: "0.25rem",
              height: "2rem",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "8px", // Set your desired border radius
              backgroundColor: "#cdcdcd", // Set your desired background color
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "8px", // Set your desired border radius
              backgroundColor: "rgba(217, 217, 217, 0.40)", // Set your desired background color
            },
          }}
        >
          Based on the provided data, the most effective hour of the day to send
          an email across all stores for all time, with the highest engagement
          after opening, is at 15:00(3 PM), with a total of 5041 emails opened.
          The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with{" "}
          <b style={{ color: props.back!=='#FFF'?'#FFF':'rgba(0, 0, 0, 0.80)' }}>5007</b> and{" "}
          <b style={{ color: props.back!=='#FFF'?'#FFF':'rgba(0, 0, 0, 0.70)'}}>4785</b> emails opened
          respectively. There is a noticeable drop in{" "}
        </Typography>
      </Box>
    </>
  );
};

export default Textbox;
