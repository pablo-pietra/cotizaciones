import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFFFFF',
    padding: theme.spacing(2, 4),
    backgroundColor: '#323232',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="caption">
        © 2020 Fiebre del dolar
      </Typography>
    </div>
  );
}

export default Footer;
