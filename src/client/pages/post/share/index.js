import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: theme.spacing(10),
  },
  icon: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing(1),
    color: '#FFFFFF',
    borderRadius: theme.spacing(0, 1, 1, 0),
    backgroundColor: '#123456',
    marginBottom: theme.spacing(0.5)
  }
}));

function Share() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="email" className={classes.icon}>
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="email" className={classes.icon}>
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="email" className={classes.icon}>
        <WhatsappIcon />
      </IconButton>
      <IconButton aria-label="email" className={classes.icon}>
        <MailIcon />
      </IconButton>
    </div>
  );
}

export default Share;
