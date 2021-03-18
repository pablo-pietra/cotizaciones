import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: '#85bb65',
  },
  title: {
    flexGrow: 1,
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: theme.spacing(0.5)
  },
  link: {
    textDecoration: 'none',
    marginLeft: theme.spacing(1)
  },
  button: {
    color: '#FFFFFF',
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <div className={classes.title}>
            INFO DOLAR
          </div>
          <NavLink exact className={classes.link} activeClassName={classes.active} to="/">
            <Button className={classes.button}><Typography variant="subtitle1">cotizaciones</Typography></Button>
          </NavLink>
          <NavLink className={classes.link} activeClassName={classes.active} to="/inversiones">
            <Button className={classes.button}><Typography variant="subtitle1">inversiones</Typography></Button>
          </NavLink>
          <NavLink className={classes.link} activeClassName={classes.active} to="/blog">
            <Button className={classes.button}><Typography variant="subtitle1">blog</Typography></Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
