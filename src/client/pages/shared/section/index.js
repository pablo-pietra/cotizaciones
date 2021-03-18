import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

function Title({ text }) {
  const classes = useStyles();

  return (
    <Typography variant="h5" gutterBottom>
      {text}
    </Typography>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
