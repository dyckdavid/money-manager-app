import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@mantine/core/esm';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {smallScreen && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap className={classes.logo}>
          My App
        </Typography>
        {/* Add other elements to the navigation bar here */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
