import { Box, Typography } from "@mui/material";

const Bigdata = () => {
  const rows = [
    { id: 1, Product: "Reusable", Q1: "10%", Q2: "4%" },
    { id: 2, Product: "Natural Resource", Q1: "2%", Q2: "11%" },
    { id: 3, Product: "Compost Compound", Q1: "7%", Q2: "5%" },
    { id: 4, Product: "Reusable Materials", Q1: "3%", Q2: "4%" },
  ];

  const element: any = {
    textAlign: "center",
    borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
    color: "rgba(241, 241, 242, 0.60)",
    fontFamily: "Inter",
    fontSize: "0.6875rem",
    fontWeight: "400",
    margin: "0rem 0.5rem 0.2rem 0.5rem",
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        border: "1px solid #757575",
        background: "#282828",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "25rem",
        maxHeight: "25rem",
      }}
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
            color="#A0A0A0"
          >
            14d
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="0.7rem"
            fontWeight={500}
            color="#A0A0A0"
          >
            30d
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "0.4rem 1rem 0rem 0rem",
            display: "flex",
            alignItems: "center",
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
            <circle cx="2" cy="2" r="2" fill="#ECECEC" fill-opacity="0.4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#ECECEC" fill-opacity="0.4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#ECECEC" fill-opacity="0.4" />
          </svg>
        </Box>
      </Box>
      <Box
        position={"absolute"}
        top={"1.5rem"}
        height={0}
        width={40}
        border={"2px solid #F1F1F2"}
      />
      <Box height={0} border={"1px solid rgba(225, 225, 225, 0.40)"} />
      <Box>
        <table
          style={{
            paddingTop: "0.8rem",
            paddingLeft: "1rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  color: "#F1F1F2",
                  fontFamily: "Inter",
                  fontSize: "0.6875rem",
                  fontWeight: "700",
                  textAlign: "left",
                  padding: "0rem 2rem 0.2rem 0rem",
                }}
              >
                PRODUCT
              </th>
              <th
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  color: "rgba(241, 241, 242, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontWeight: "600",
                  padding: "0rem 0.4rem 0.2rem 0.4rem",
                  textAlign: "center",
                }}
              >
                Q1-23
              </th>
              <th
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  color: "rgba(241, 241, 242, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontWeight: "600",
                  padding: "0rem 0.4rem 0.2rem 0.4rem",
                }}
              >
                Q2-23
              </th>
              <th
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  color: "rgba(241, 241, 242, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontWeight: "600",
                  padding: "0rem 0.4rem 0.2rem 0.4rem",
                  textAlign: "center",
                }}
              >
                Q3-23
              </th>
              <th
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  color: "rgba(241, 241, 242, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontWeight: "600",
                  padding: "0rem 0.4rem 0.2rem 0.4rem",
                  textAlign: "center",
                }}
              >
                Q4-23
              </th>
              <th
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  color: "rgba(241, 241, 242, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontWeight: "600",
                  padding: "0rem 0.4rem 0.2rem 0.4rem",
                  textAlign: "center",
                }}
              >
                Q1-24
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.id}>
                  <td
                    style={{
                      padding: "0rem 2rem 0.2rem 0rem",
                      color: "rgba(255, 255, 255, 0.65)",
                      fontFamily: "Inter",
                      fontSize: "0.6875rem",
                      fontWeight: "400",
                    }}
                  >
                    {row.Product}
                  </td>
                  <td style={{ ...element }}>{row.Q1}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  
                </tr>
              );
            })}
            {rows.map((row) => (
              <tr key={row.id}>
                <td
                  style={{
                    padding: "0rem 0.8rem 0.2rem 0rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.6875rem",
                    fontWeight: "400",
                  }}
                >
                  {row.Product}
                </td>
                <td style={{ ...element }}>{row.Q1}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>                
              </tr>
            ))}
            {rows.map((row) => (
              <tr key={row.id}>
                <td
                  style={{
                    padding: "0rem 0.8rem 0.2rem 0rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.6875rem",
                    fontWeight: "400",
                  }}
                >
                  {row.Product}
                </td>
                <td style={{ ...element }}>{row.Q1}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
              </tr>
            ))}
            {rows.map((row) => (
              <tr key={row.id}>
                <td
                  style={{
                    padding: "0rem 0.8rem 0.2rem 0rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "Inter",
                    fontSize: "0.6875rem",
                    fontWeight: "400",
                  }}
                >
                  {row.Product}
                </td>
                <td style={{ ...element }}>{row.Q1}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
                  <td style={{ ...element }}>{row.Q2}</td>
              </tr>
            ))}
            <tr>
              <td
                style={{
                  padding: "0.4rem 0.8rem 0.2rem 0rem",

                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                }}
              >
                Total
              </td>
              <td
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  padding: "0.4rem 0.5rem 0.2rem 0.5rem",
                  textAlign: "center",
                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                }}
              >
                8%
              </td>
              <td
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  padding: "0.4rem 0.5rem 0.2rem 0.5rem",
                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                12%
              </td>
              <td
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  padding: "0.4rem 0.5rem 0.2rem 0.5rem",
                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                7%
              </td>
              <td
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  padding: "0.4rem 0.5rem 0.2rem 0.5rem",
                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                20%
              </td>
              <td
                style={{
                  borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                  padding: "0.4rem 0.5rem 0.2rem 0.5rem",
                  color: "rgba(244, 244, 244, 0.90)",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                3%
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Bigdata;
