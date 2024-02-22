import { Box, Typography } from "@mui/material";

const Small = (prop: any) => {
  const rows = [
    { id: 1, Product: "Reusable", Q1: "10%", Q2: "4%" },
    { id: 2, Product: "Natural", Q1: "2%", Q2: "11%" },
    { id: 3, Product: "Compost", Q1: "7%", Q2: "5%" },
    { id: 4, Product: "Reusable", Q1: "3%", Q2: "4%" },
  ];
  
  let black: boolean= false;
  if(prop.prop.backgroundColor==="#282828")black=true;
  if(prop.back==="#282828"){
    black=true;
    prop.prop.backgroundColor=prop.back;
  }
  return (
    <>
      <div 
        style={prop.prop}              
      >
        
        <Box
        sx={{
          display: "flex",
          minWidth: "13rem",
          
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
            color={black?"#F4F4F4":"#5E5ADB"}
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
            color={black ? "#757575":"#BBB"}
          >
            14d
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="0.7rem"
            fontWeight={500}
            color={black ? "#757575":"#BBB"}
          >
            30d
          </Typography>
        </Box>
          <Box
            sx={{
              padding: "1rem 2rem 0rem 0rem",
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
        {black ? (
          <>
          <Box
          position={"absolute"}
          height={0}
          width={40}
          border={"1px solid #F1F1F2"}
        />

        <Box height={0} border={"1px solid #363636"} />
        </>
        ):(
          <>
          <Box
          position={"absolute"}
          height={0}
          width={40}
          border={"2px solid #5E5ADB"}
        />

        <Box height={0} border={"1px solid #E1E1E1"} />
        </>
        )}
        

        <Box>
          <table
            style={{
              paddingTop: "0.8rem",
              paddingLeft: "1rem",
            }}
          >
            <thead>
              <tr style={{ paddingBottom: "" }}>
                <th
                  style={{
                    color: black ? "#F1F1F2" :"#5E5ADB",
                    fontFamily: "Inter",
                    fontSize: "0.6875rem",
                    fontWeight: "700",
                    padding: "0rem 0.8rem 0.2rem 0rem",
                  }}
                >
                  PRODUCT
                </th>
                <th
                  style={{
                    borderLeft: black? "":"3px solid #F6F6F6",
                    color: black ? "rgba(241, 241, 242, 0.60)" :"#ABA8FF",
                    
                    fontFamily: "Inter",
                    fontSize: "0.625rem",
                    fontWeight: "600",
                    padding: "0rem 0.2rem 0.2rem 0.2rem",
                    textAlign: "center",
                  }}
                >
                  Q1-23
                </th>
                <th
                  style={{
                    borderLeft: black? "":"3px solid #F6F6F6",
                    color: black ? "rgba(241, 241, 242, 0.60)" :"#ABA8FF",
                    fontFamily: "Inter",
                    fontSize: "0.625rem",
                    fontWeight: "600",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Q2-23
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td
                    style={{
                      padding: "0rem 0.8rem 0.2rem 0rem",
                      color: black? "rgba(255, 255, 255, 0.65)":"rgba(71, 71, 71, 0.65)",
                      fontFamily: "Inter",
                      fontSize: "0.6875rem",
                      fontWeight: "400",
                      
                    }}
                  >
                    {row.Product}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderLeft: black? "":"3px solid #F6F6F6",
                      color: black? "rgba(255, 255, 255, 0.65)":"rgba(71, 71, 71, 0.65)",
                      fontFamily: "Inter",
                      fontSize: "0.6875rem",
                      fontWeight: "400",
                      padding: "0rem 0.2rem 0.2rem 0.2rem",
                      
                    }}
                  >
                    {row.Q1}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderLeft: black? "":"3px solid #F6F6F6",
                      color: black? "rgba(255, 255, 255, 0.65)":"rgba(71, 71, 71, 0.65)",
                      fontFamily: "Inter",
                      fontSize: "0.6875rem",
                      fontWeight: "400",
                      padding: "0rem 0.8rem 0.2rem 0.2rem",
                    }}
                  >
                    {row.Q2}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  style={{
                    padding: "0.4rem 0.8rem 0.2rem 0rem",
       
                    color: black? "rgba(244, 244, 244, 0.65)":"rgba(71, 71, 71, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Total
                </td>
                <td
                  style={{
                    borderLeft: black? "":"3px solid #F6F6F6",
                    padding: "0.4rem 0.2rem 0.2rem 0.2rem",
                    textAlign: "center",
                    color: black? "rgba(244, 244, 244, 0.65)":"rgba(71, 71, 71, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  8%
                </td>
                <td
                  style={{
                    borderLeft: black? "":"3px solid #F6F6F6",
                    padding: "0.4rem 0.8rem 0.2rem 0.2rem",
                    color: black? "rgba(244, 244, 244, 0.65)":"rgba(71, 71, 71, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  12%
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </div>
    </>
  );
};

export default Small;
