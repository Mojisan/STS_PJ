import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00338D",
            light: "#fff"
        },
        secondary: {
            main: "#f0a0a5"
        },
    },
    typography: {
    },
})

theme.typography.button = {
    fontSize: "16px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    color: "#212529"
}

theme.typography.caption = {
    fontSize: "10px",
    fontFamily: "FC Iconic",
    fontWeight: 500,
    color: "#212529"
}

theme.typography.h1 = {
    fontSize: "2.7vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.h2 = {
    fontSize: "2.0vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.h3 = {
    fontSize: "28px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    lineHeight: 1.2,
    color: "#212529"
}

theme.typography.body1 = {
    fontSize: "1.15vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.body2 = {
    fontSize: "1.35vw",
    fontFamily: "Inter",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.h6 = {
    fontSize: "14px",
    fontFamily: "FC Iconic",
    fontWeight: 500,
    color: "#212529"
}

theme.typography.h5 = {
    fontSize: "20px",
    fontFamily: "FC Iconic",
    fontWeight: 600,
    color: "#212529"
}

export default theme