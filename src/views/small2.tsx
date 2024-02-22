import { Box, Typography } from "@mui/material";

const Small2 = () => {
  const rows = [
    { id: 1, Product: "Reusable", Q1: "10%", Q2: "4%" },
    { id: 2, Product: "Natural", Q1: "2%", Q2: "11%" },
    { id: 3, Product: "Compost", Q1: "7%", Q2: "5%" },
    { id: 4, Product: "Reusable", Q1: "3%", Q2: "4%" },
  ];
  return (
    <>
      <Box
        minWidth="11.5rem"
        height="11.5rem"
        bgcolor="#5E5ADB"
        borderRadius="1rem"
        border="1px solid #E6E6E6"
        marginLeft="1.75rem"
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
              fontFamily="Geist"
              fontSize="0.7rem"
              fontWeight={600}
            >
              Today
              <svg
                style={{ paddingLeft: "0.2rem" }}
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
                  fill="#EBEBEB"
                />
              </svg>
            </Typography>

            <Box
              sx={{
                padding: "0.4rem 0rem 0rem 4.7rem",
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
                <circle opacity="0.4" cx="2" cy="2" r="2" fill="#EAEAEA" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle opacity="0.4" cx="2" cy="2" r="2" fill="#EAEAEA" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle opacity="0.4" cx="2" cy="2" r="2" fill="#EAEAEA" />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box height={0} border={"1px solid #E1E1E1"} />

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
                    color: "#F1F1F2",
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
                    borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                    color: "rgba(241, 241, 242, 0.60)",
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
                    borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                    color: "rgba(241, 241, 242, 0.60)",
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
                      color: "rgba(255, 255, 255, 0.65)",
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
                      borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                      color: "rgba(241, 241, 242, 0.60)",
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
                      borderLeft: "1px solid rgba(246, 246, 246, 0.10)",
                      color: "rgba(241, 241, 242, 0.60)",
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
                    padding: "0.4rem 0.2rem 0.2rem 0.2rem",
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
                    padding: "0.4rem 0.8rem 0.2rem 0.2rem",
                    color: "rgba(244, 244, 244, 0.90)",
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
      </Box>
    </>
  );
};

export default Small2;
