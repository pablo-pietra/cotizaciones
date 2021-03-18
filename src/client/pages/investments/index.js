import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Exchange from '../../components/exchange';
import Article from '../../components/article';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F5F5F5'
  },
  content: {
    marginTop: theme.spacing(8)
  },
  leftPanel: {
    padding: theme.spacing(2)
  },
  rightPanel: {
    padding: theme.spacing(2),
    backgroundColor: '#123456'
  },
  cardHeader: {
    color: '#FFFFFF',
    backgroundColor: '#2196F3',
  },
  cardActions: {
    backgroundColor: '#F5F5F5'
  },
  input: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
  divider: {
    margin: theme.spacing(1, 1)
  },
}));

function Separator() {
  return (
    <div>
      <br />
      <br />
    </div>
  );
}

function Investments() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [converted, setConverted] = useState(null);
  const [solidary, setSolidary] = useState(null);
  const [blue, setBlue] = useState(null);
  const [euro, setEuro] = useState(null);
  const [real, setReal] = useState(null);
  const [uruguayo, setUruguayo] = useState(null);
  const [chileno, setChileno] = useState(null);
  const [otherCoins, setOtherCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/cotizaciones',
      );
      setData(result.data);
      setConverted({ coin: 'ARS', value: result.data.cotizaciones.usd.value });
      setSolidary({ coin: 'ARS', value: result.data.cotizaciones.usd.solidary });
      setBlue({ coin: 'ARS', value: result.data.cotizaciones.usd.blue });
      setEuro({ coin: 'ARS', value: result.data.cotizaciones.eur.value });
      setReal({ coin: 'ARS', value: result.data.cotizaciones.brl.value });
      setUruguayo({ coin: 'ARS', value: result.data.cotizaciones.uyu.value });
      setChileno({ coin: 'ARS', value: result.data.cotizaciones.chl.value });

      setOtherCoins([{ coin: 'CAD', value: result.data.cotizaciones.cad.value },
        { coin: 'CHF', value: result.data.cotizaciones.chf.value },
        { coin: 'GBP', value: result.data.cotizaciones.gbp.value }]);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {
        converted !== null && solidary !== null && euro !== null && real !== null && uruguayo !== null && chileno !== null
          ? (
            <Container maxWidth="xl" disableGutters>
              <Grid container className={classes.content}>
                <Grid item md={9} className={classes.leftPanel}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Dolar Oficial" base={{ coin: '$', value: 1 }} currency={converted} price={data.cotizaciones.usd.value} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Dolar Solidario" base={{ coin: '$', value: 1 }} currency={solidary} price={data.cotizaciones.usd.solidary} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Dolar Blue" base={{ coin: '$', value: 1 }} currency={blue} price={data.cotizaciones.usd.blue} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Dolar Bolsa" base={{ coin: '$', value: 1 }} currency={blue} price={data.cotizaciones.usd.blue} />
                    </Grid>
                  </Grid>
                  <Separator />
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Euro" base={{ coin: '$', value: 1 }} currency={euro} price={data.cotizaciones.eur.value} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Real" base={{ coin: '$', value: 1 }} currency={real} price={data.cotizaciones.brl.value} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Peso Uruguayo" base={{ coin: '$', value: 1 }} currency={uruguayo} price={data.cotizaciones.uyu.value} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Exchange title="Peso Chileno" base={{ coin: '$', value: 1 }} currency={chileno} price={data.cotizaciones.chl.value} />
                    </Grid>
                  </Grid>
                  <Separator />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Moneda</TableCell>
                              <TableCell align="right">Cotizacion en pesos</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {otherCoins.map(row => (
                              <TableRow key={row.coin}>
                                <TableCell component="th" scope="row">
                                  {row.coin}
                                </TableCell>
                                <TableCell align="right">
                                  $
                                  {row.value}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Moneda</TableCell>
                              <TableCell align="right">Cotizacion en pesos</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {otherCoins.map(row => (
                              <TableRow key={row.coin}>
                                <TableCell component="th" scope="row">
                                  {row.coin}
                                </TableCell>
                                <TableCell align="right">
                                  $
                                  {row.value}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} className={classes.rightPanel}>
                  <Article />
                </Grid>
              </Grid>
            </Container>
          ) : <p>cargando</p>
      }
    </div>
  );
}

export default Investments;
