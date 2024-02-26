import { Box, Button, ClickAwayListener, Popper, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import Small from "../../views/small";
import { useContext, useState } from "react";

import Textbox from "../../views/textbox";
import SmallGraph from "../../views/smallGraph";
import { DashboardContext } from "../../hooks/context";
import Small2 from "../../views/small2";

interface TProps {
  getClose: ()=> void
}
const WidgetAdder: React.FC<TProps> = ({getClose}) => {
    const [close, setClose] = useState<boolean>(true)
    const [boxSelect, setBoxSelect] = useState<number>(1);
    const [dataBox, setDataBox] =useState<boolean>(true)
    const [summaryBox, setSummaryBox]=useState<boolean>(false);
    const [chooseColor, setChooseColor] = useState<string>('#FFF');
    const[pie, setPie] =useState<boolean>(false);
    const[bar, setBar] =useState<boolean>(false);
    const[line, setLine] =useState<boolean>(false);

    const [addedWidget, setAddedWidget]= useContext(DashboardContext) || [[],null];
    // console.log(boxSelect);
  const style = {
    width: "13rem",
    maxWidth: "13rem",
    height: "12rem",
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
  const handleSave=()=>{
    const component = (
      (pie && <SmallGraph graphStyle1={graphStyle1} pie={pie} bar={bar} line={line}/>)||
      (bar && <SmallGraph graphStyle1={graphStyle1} pie={pie} bar={bar} line={line}/>)||
      (line && <SmallGraph graphStyle1={graphStyle1} pie={pie} bar={bar} line={line}/>)||
      (summaryBox && <Textbox width={"20rem"} back={chooseColor}/>)||
      ( (dataBox && chooseColor!=='#FFF') && <Small prop={style} />)||
      ( (dataBox && chooseColor!=='#282828') && <Small prop={style2} />)||
      ((dataBox && chooseColor==='#5E5ADB') && <Small2></Small2>)
    )
    setAddedWidget([...addedWidget,component]);
    setClose(false);
    getClose()
  }
 
  const handleBoxSelect=(x:number)=>{
    setBoxSelect(x);
  }

  const handleGraphBox=()=>{
    setPie(false)
    setBar(false)
    setLine(false)
  }
  const graphStyle1 = {
    display:"flex",
    flexDirection:"column",
    
    height:"13rem",
    width: '14rem',
    backgroundColor:"#FFF",
    borderRadius:"1rem",
    boxShadow:"0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
    border:"1px solid #E7E7E7",
  }
  return (
    <>
      <Popper
        open={close}
        placement={"top"}
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(39, 39, 39, 0.35)",
        }}
        
      >
        <ClickAwayListener  onClickAway={()=>{
          setClose(false)
          getClose()
        } }>
        <Box
          sx={{
            backgroundColor: "#FFF",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "1rem",
            minHeight: "32rem",
            height: "70%",
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
              width: "auto",
              display: "flex",
              flexDirection: "row",
              margin: "1.5rem 0rem 0.8rem 2rem",
              maxHeight: "5rem",
              height: "20%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  borderRadius: "0.2rem",
                  padding: "0.2rem 0.2rem 0.1rem 0.2rem",
                  border: "2px solid #E0DFF8",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.1 3.45007H3.45001V12.0001H10.1V3.45007Z"
                    stroke="#5E5ADB"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5497 3.45007H13.8997V8.20007H20.5497V3.45007Z"
                    stroke="#5E5ADB"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5497 12H13.8997V20.55H20.5497V12Z"
                    stroke="#5E5ADB"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1 15.8H3.45001V20.55H10.1V15.8Z"
                    stroke="#5E5ADB"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "1rem",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#5E5ADB",
                    fontFamily: "Inter",
                    fontSize: "1.2rem",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  Create Widget
                </Typography>
                <Typography
                  sx={{
                    color: "#888891",
                    fontFamily: "Inter",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Manage the glossary of terms of your Database.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <ClearIcon
                sx={{
                  width: "1.5rem",
                  margin: "0.5rem 2rem",
                  height: "1.5rem",
                  cursor: "pointer",
                  fill: "#414141",
              
                }}
                onClick={()=> {getClose()
                  setClose(false)}}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "0.375rem",
                  border: "1px solid #CBD5E1",
                  width: "20rem",
                  marginRight: "2rem",
                  padding: "0.2rem 0.5rem 0.2rem 0.75rem",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    color: "#898989",
                    fontFamily: "inter",
                    fontSize: "0.875rem",

                    fontWeight: "500",
                  }}
                >
                  Reusablity Scores
                </Typography>
                <ClearIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    fill: "#A0A0A0",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box border={"1px solid #e1e1e1"} width={"100%"}></Box>
          <Box
            sx={{
              width: "auto",
              display: "flex",
              flexDirection: "row",
              margin: "1.5rem 0rem 0.8rem 2rem",
              //   maxHeight: "5rem",

              height: "70%",
            }}
          >
            <Box
              sx={{
                width: "65%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "0.375rem",
                border: "1px solid #E0DFF8",
                alignItems: "center",
                justifyContent: 'center',

                //   maxHeight: "5rem",
                backgroundColor: "#F8F8FF",
                height: "auto",
              }}
            >
              {(dataBox && chooseColor!=='#5E5ADB') && <Small prop={style} back={chooseColor}/>}
              {(dataBox && chooseColor==='#5E5ADB') && <Small2></Small2>}
              {summaryBox && <Textbox width={"20rem"} back={chooseColor}/> }
              {pie && <SmallGraph graphStyle1={graphStyle1} pie={true} bar={false} line={false} back={chooseColor}/>}
              {line && <SmallGraph graphStyle1={graphStyle1} pie={false} bar={false} line={true} back={chooseColor}/>}
              {bar && <SmallGraph graphStyle1={graphStyle1} pie={false} bar={true} line={false} back={chooseColor}/>}
             
              
              <Box
                
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  width: "10rem",
                  marginTop: "10%",
                  display: "flex",
                }}
                
              >
                <Box
                onClick={()=>setChooseColor('#282828')}
                  height={"1.5rem"}
                  width={"1.5rem"}
                  bgcolor={"#282828"}
                  margin={"0.2rem 0.3rem"}
                  border={chooseColor==='#282828'?"4px solid #D3D2F5":"4px solid #F8F8FF"}
                  borderRadius={"50%"}
                  sx={{
                    cursor: "pointer",
                  }}
                ></Box>
                <Box
                onClick={()=>setChooseColor('#FFF')}
                  height={"1.5rem"}
                  width={"1.5rem"}
                  bgcolor={"#FFF"}
                  margin={"0.2rem 0.3rem"}
                  border={chooseColor==='#FFF'?"4px solid #D3D2F5":"4px solid #F8F8FF"}
                  borderRadius={"50%"}
                  sx={{
                    cursor: "pointer",
                  }}
                ></Box>
                
                <Box
                onClick={()=>setChooseColor('#5E5ADB')}
                  height={"1.5rem"}
                  width={"1.5rem"}
                  bgcolor={"#5E5ADB"}
                  margin={"0.2rem 0.3rem"}
                  border={chooseColor==='#5E5ADB'?"4px solid #D3D2F5":"4px solid #F8F8FF"}
                  borderRadius={"50%"}
                  sx={{
                    cursor: "pointer",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box sx={{
                width: "29%",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between', 
                marginLeft: '1.5rem',
                height: "auto",
              }}>
                <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: '0.3rem',
                
                
                height: "70%",
              }}>
                <Typography sx={{
                    color: 'rgba(43, 43, 43, 0.35)',
                    fontFamily: 'inter',
                    fontSize: '0.8125rem',               
                    fontWeight: '500',
                    letterSpacing: '0.01625rem',
                    textTransform: 'uppercase'
                }}>Components</Typography>
                <Box sx={{
                    padding: '0.7rem',
                    borderRadius: '0.5rem',
                    border: '1px solid',
                    borderColor: boxSelect===1 ? "#5E5ADB":"#E4E4E7",
                    cursor: "pointer",
                    
                }}
                
                onClick={()=>{
                   handleBoxSelect(1)
                   setDataBox(true)
                   setSummaryBox(false)
                   handleGraphBox()
                   }} > 
                    <Typography sx={{
                    color: '#585858',
                    fontFamily: 'inter',
                    fontSize: '1rem',               
                    fontWeight: '500',
                    lineHeight: '1.5rem'
                }}>Data</Typography>
                    <Typography sx={{
                    color: '#888891',
                    fontFamily: 'inter',
                    fontSize: '0.8rem',               
                    fontWeight: '500',
                    lineHeight: '1.2rem'
                }}>Random Description</Typography>
                </Box>
                <Box sx={{
                    padding: '0.7rem',
                    borderRadius: '0.5rem',
                    border: '1px solid' ,
                    borderColor: boxSelect===2 ? "#5E5ADB":"#E4E4E7",
                }}
                > 
                    <Typography sx={{
                    color: '#585858',
                    fontFamily: 'inter',
                    fontSize: '1rem',               
                    fontWeight: '500',
                    lineHeight: '1.5rem'
                }}>Graph</Typography>
                    <Typography sx={{
                    color: '#888891',
                    fontFamily: 'inter',
                    fontSize: '0.8rem',               
                    fontWeight: '500',
                    lineHeight: '1.2rem'
                }}>Random Description</Typography>
                <Box width={"50%"} 
                 display={"flex"} 
                 flexDirection={"row"} 
                 bgcolor={"#F4F4F5"} borderRadius={"0.3525rem"} 
                 sx={{cursor: 'pointer',}}
                 onClick={()=> {
                  handleBoxSelect(2)
                  setDataBox(false)
                   setSummaryBox(false)
                  }}>
                    <BarChartIcon sx={{
                        height: '1rem',
                        width: '1rem',
                        
                        margin: '0.1rem 0.3rem',
                        padding: '0rem 0.6rem',
                        backgroundColor: bar ? '#FFF' : '',
                        fill: '#71717A',}}
                       onClick= {()=>{
                        setBar(true)
                        setPie(false)
                        setLine(false)
                       }} 
                      
                      />
                    <ShowChartIcon sx={{
                        height: '1rem',
                        width: '1rem',
                        margin: '0.1rem 0.3rem',
                        padding: '0rem 0.6rem',
                        backgroundColor: line ? '#FFF' : '',
                        fill: '#71717A',}}
                        onClick= {()=>{
                          setBar(false)
                          setPie(false)
                          setLine(true)
                         }} />
                    <PieChartOutlineOutlinedIcon sx={{
                        height: '1rem',
                        width: '1rem',
                        margin: '0.1rem 0.3rem',
                        padding: '0rem 0.6rem',
                        backgroundColor: pie ? '#FFF' : '',
                        fill: '#71717A',}}
                        onClick= {()=>{
                          setBar(false)
                          setPie(true)
                          setLine(false)
                         }} />
                </Box>
                </Box>
                <Box sx={{
                    padding: '0.7rem',
                    borderRadius: '0.5rem',
                    border: '1px solid',
                    borderColor: boxSelect===3 ? "#5E5ADB":"#E4E4E7",
                    cursor: "pointer",
                }}
                onClick={()=>{
                   handleBoxSelect(3)
                   setDataBox(false)
                   handleGraphBox()
                   setSummaryBox(true)}}> 
                    <Typography sx={{
                    color: '#585858',
                    fontFamily: 'inter',
                    fontSize: '1rem',               
                    fontWeight: '500',
                    lineHeight: '1.5rem'
                }}>Summary</Typography>
                    <Typography sx={{
                    color: '#888891',
                    fontFamily: 'inter',
                    fontSize: '0.8rem',               
                    fontWeight: '500',
                    lineHeight: '1.2rem'
                }}>Random Description</Typography>
                </Box>
              </Box>

              <Box display={"flex"} flexDirection={"row"} justifyContent={"end"}>
                <Button variant="outlined" sx={{
                    borderColor: '#E4E4E7',
                    color: '#9F9F9F',
                    fontFamily: 'Inter',
                    width: '30%',
                }}
                onClick={()=>{ getClose()
                setClose(false)}}>cancel</Button>
                <Button variant="contained" sx={{
                    marginLeft: '2rem',
                    backgroundColor: '#5e5adb',
                    color: '#FFF',
                    fontFamily: 'Inter',
                    width: '30%',
                }}
                
                onClick={handleSave}>Save</Button>
              </Box>
              </Box>
          </Box>
        </Box>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default WidgetAdder;
