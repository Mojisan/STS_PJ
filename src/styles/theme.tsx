import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00338D",
            light: "#fff"
        },
        secondary: {
            main: "#F7F9FC"
        },
    },
    typography: {
    },
    components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              fontSize: '16px',
              borderRadius: '16px'
            },
          },
        },
        MuiAutocomplete: {
            styleOverrides: {
              root: {
                fontFamily: "FC Iconic",
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              // ปรับแต่งสไตล์ CSS ของ input ภายใน MuiInputBase
              input: {
                fontFamily: "FC Iconic", // ตัวอย่างเท่านี้
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              // ปรับแต่งสไตล์ CSS ของ input ภายใน MuiOutlinedInput
              input: {
                fontFamily: "FC Iconic", // ตัวอย่างเท่านี้
              },
            },
          },
      },
      
})

theme.typography.button = {
    fontSize: "20px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    color: "#000000"
}

theme.typography.caption = {
    fontSize: "14px",
    fontFamily: "FC Iconic",
    fontWeight: 500,
    color: "#000000"
}

theme.typography.h1 = {
    fontSize: "36px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    color: "#000000"
}

theme.typography.h2 = {
    fontSize: "2.0vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#000000"
}

theme.typography.h3 = {
    fontSize: "32px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    lineHeight: 1.2,
    color: "#000000"
}

theme.typography.body1 = {
    fontSize: "1.15vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#000000"
}

theme.typography.body2 = {
    fontSize: "16px",
    fontFamily: "FC Iconic",
    fontWeight: 400,
    color: "#000000"
}

theme.typography.h6 = {
    fontSize: "18px",
    fontFamily: "FC Iconic",
    fontWeight: 500,
    color: "#000000"
}

theme.typography.h5 = {
    fontSize: "24px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    color: "#000000"
}

export default theme