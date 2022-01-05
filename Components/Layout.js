import React, { Children } from 'react';
import Head from 'next/head';
import useStyle from '../utility/styles'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Layout = ({children}) => {
    const classes = useStyle();
    return (
        <div>
            <Head>
                <title>Ecommerce</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography>Amazona</Typography>
             </Toolbar>
            </AppBar>
            <Container className={classes.main}>{children}</Container>
            <footer>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer>
        </div>
    );
};

export default Layout;