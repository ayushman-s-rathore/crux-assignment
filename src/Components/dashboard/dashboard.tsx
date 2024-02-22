import { Box, Typography } from "@mui/material";
import Small from "../../views/small";
import Small2 from "../../views/small2";
import Info from "../../views/info";
import Bigdata from "../../views/bigdata";
import Textbox from "../../views/textbox";
import Graph from "../../views/graph";
import SmallGraph from "../../views/smallGraph";
import LineChart from "../../views/lineChart";
import LineData from '../../assets/line.json';
import { useContext } from "react";
import { DashboardContext } from "../../hooks/context";


const Dashboard = () => {
  
  const data= LineData.products
  const addedWidget = useContext(DashboardContext)
  // console.log(addedWidget);
  
  const style = {
    width: "12rem",
    height: "11.5rem",
    maxWidth: '13rem',
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    border: "1px solid #E6E6E6",
  };
  const style2 = {
    minWidth: "11.5rem",
    height: "11.5rem",
    maxWidth: '13rem',
    backgroundColor: "#282828",
    borderRadius: "1rem",
    border: "1px solid #E6E6E6",
  };
  const graphStyle1 = {
        display:"flex",
        flexDirection:"column",
        maxHeight: '13rem',
        height:"40%",
        backgroundColor:"#FFF",
        borderRadius:"1rem",
        boxShadow:"0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        border:"1px solid #E7E7E7",
  }
  const graphStyle2 ={
    display:"flex",
    flexDirection:"column",
    
    height:"60%",
    backgroundColor:"#FFF",
    borderRadius:"1rem",
    boxShadow:"0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
    border:"1px solid #E7E7E7",
  }

  return (
    <>
      <Box display="flex" width="100%" padding="2rem 3rem 0rem 3rem">
        <Small prop={style} />
        <Small2 />
        <Info />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        height={"43rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"30%"}
          height={"68%"}
          padding="2rem 0rem 0rem 3rem"
        >
          <Bigdata />
          <Box display={"flex"} width={"30%"} paddingTop="2rem">
            <Small prop={style2} />
            <Small2 />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"30%"}
          maxHeight={"40rem"}
          padding="2rem 0rem 0rem 2rem"
        >
          <Textbox back={"#FFF"}/>
          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              marginRight={"1rem"}
              width={"50%"}
              height={"100%"}
            >
              <Graph />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginTop={"2rem"}
              gap={"1.25rem"}
              width={"50%"}
              height={"auto"}
            >
              <Small prop={style2} />
              <SmallGraph graphStyle1={graphStyle2} pie={false} bar={false} line={true}/>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"12%"}
          maxHeight={"40rem"}
          margin="2rem 0rem 0rem 2rem"
          borderRadius={"1rem"}
          bgcolor={"#282828"}
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
          <Box
            sx={{
              padding: "0.4rem 0rem 0rem 1.8rem",
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
        </Box>
        <Box
          position={"absolute"}
          marginTop={"1.5rem"}
          height={0}
          width={40}
          border={"1px solid #F1F1F2"}
        />

        <Box height={0} border={"1px solid #363636"} />
        <Box height={"50%"} padding={"1rem 0.5rem"}>
            <LineChart data={data}/>
        </Box>
        <Box height={0} width={"80%"} marginLeft={"1rem"} border={"1px solid #727272"} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          
          width={"13%"}
          maxHeight={"68%"}
          margin="2rem 0rem 0rem 1rem"
        >
          <SmallGraph graphStyle1={graphStyle1} pie={true} bar={false} line={false}/>
          <Graph />
        </Box>
      </Box>
      <Box 
      sx={{
        width: "91%",
  
         margin: "0.2rem 3rem",
         display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap',
         gap: '2rem',
         height: "13rem",

      }}>
        {addedWidget?.map((ele:any)=> {
          return( 
          <>
          {ele}
          </>          
          )})}

      </Box>
    </>
  );
};

export default Dashboard;
