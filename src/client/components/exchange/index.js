import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    backgroundColor: '#6585bb',
    padding: theme.spacing(1, 2)
  },
  cardActions: {
    backgroundColor: '#6585bb1a'
  },
  input: {
    width: 110,
    backgroundColor: '#FFFFFF',
    paddingLeft: theme.spacing(1)
  },
  inputAdornment: {
    marginRight: theme.spacing(0.5)
  },
}));

function Exchange({
  title, base, currency, price
}) {
  const classes = useStyles();
  const [value, setValue] = useState(base);
  const [converted, setConverted] = useState(currency);

  const handleChange = (event) => {
    setValue({ ...value, value: event.target.value });
    const exchange = value.coin === 'ARS'
      ? parseFloat(event.target.value / price).toFixed(2)
      : parseFloat(event.target.value * price).toFixed(2);
    setConverted({ ...converted, value: exchange });
  };

  const handleSwap = () => {
    const newConverted = value;
    setValue(converted);
    setConverted(newConverted);
  };

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={(
          <Typography variant="body1">
            {title}
          </Typography>
                    )}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="caption" gutterBottom color="textSecondary">COMPRA</Typography>
            <Typography variant="h5">
              $
              {price}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" gutterBottom color="textSecondary">VENTA</Typography>
            <Typography variant="h5">
              $
              {price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <FormControl>
          <OutlinedInput
            id="standard-adornment-amount"
            margin="dense"
            value={value.value}
            onChange={handleChange}
            variant="outlined"
            className={classes.input}
            inputProps={{ style: { paddingTop: 4, paddingBottom: 4 } }}
            startAdornment={<InputAdornment position="start" className={classes.inputAdornment}><Typography variant="body2">{value.coin}</Typography></InputAdornment>}
          />
        </FormControl>
        <IconButton aria-label="swap" size="small" onClick={handleSwap}>
          <SwapHorizIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" display="inline">
          {`${converted.coin} ${converted.value}`}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Exchange;
