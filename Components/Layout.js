// import React, { Children } from "react";
import Head from "next/head";
import useStyle from "../utility/styles";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { Store } from "../utility/store";
import Cookies from "js-cookie";
const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyle();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Anazona` : "Next Anazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>E-commerce</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/card" passHref>
                <Link>Card</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer>
          <Typography className={classes.footer}>
            All rights reserved. Next Amazona.
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
