
const NodeCache = require('node-cache');
const express = require('express');
const axios = require('axios');
const os = require('os');

const myCache = new NodeCache({ stdTTL: 3600 });
const app = express();

function mapCotizaciones(data) {
  const {
    USDARS, USDBRL, USDEUR, USDUYU, USDCAD, USDCHF, USDGBP, USDCHL
  } = data.quotes;

  const value = {
    cotizaciones: {
      usd: {
        coin: 'USD',
        value: parseFloat(USDARS.toFixed(2)),
        solidary: parseFloat((USDARS + (USDARS * 0.65)).toFixed(2)),
        blue: parseFloat((USDARS + (USDARS * 0.9)).toFixed(2))
      },
      eur: {
        coin: 'EUR',
        value: parseFloat((USDARS / USDEUR).toFixed(2))
      },
      brl: {
        coin: 'BRL',
        value: parseFloat((USDARS / USDBRL).toFixed(2))
      },
      uyu: {
        coin: 'UYU',
        value: parseFloat((USDARS / USDUYU).toFixed(2))
      },
      chl: {
        coin: 'CHL',
        value: parseFloat((USDARS / USDCHL).toFixed(2))
      },
      cad: {
        coin: 'CAD',
        value: parseFloat((USDARS / USDCAD).toFixed(2))
      },
      chf: {
        coin: 'CHF',
        value: parseFloat((USDARS / USDCHF).toFixed(2))
      },
      gbp: {
        coin: 'GBP',
        value: parseFloat((USDARS / USDGBP).toFixed(2))
      }

    },
    valores: {
      smvm: 16875, jubilacion: 18129, ife: 10000
    }
  };

  myCache.set('cotizaciones', value, 3600);

  return value;
}

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/posts', (req, res) => {
  const posts = [
    {
      title: 'Post de prueba',
      creationDate: '11 de Septiembre de 2020',
      subTitle: 'Este es un post de prueba y esta mockeado para ver como queda',
      image: '/public/react.png',
      content: 'asd',
      pinned: true,
      slug: 'post-de-prueba'
    },
    {
      title: 'Post de prueba',
      creationDate: '11 de Septiembre de 2020',
      subTitle: 'Este es un post de prueba y esta mockeado para ver como queda',
      image: '/public/react.png',
      content: 'asd',
      pinned: true,
      slug: 'post-de-prueba'
    },
    {
      title: 'Post de prueba',
      creationDate: '11 de Septiembre de 2020',
      subTitle: 'Este es un post de prueba y esta mockeado para ver como queda',
      image: '/public/react.png',
      content: 'asd',
      pinned: true,
      slug: 'post-de-prueba'
    }
  ];

  res.send({ posts });
});

app.get('/api/post/:slug', (req, res) => {
  const post = {
    title: 'Post de prueba',
    creationDate: '11 de Septiembre de 2020',
    subTitle: 'Este es un post de prueba y esta mockeado para ver como queda',
    image: '/public/react.png',
    content: 'asd',
    pinned: true,
    slug: 'post-de-prueba'
  };

  res.send(post);
});

app.get('/api/cotizaciones', (req, res) => {
  const value = myCache.get('cotizaciones');
  if (value === undefined) {
    try {
      // axios.get('http://api.currencylayer.com/live?access_key=6582167989cb7388b690e5c533db7251&currencies=USD,ARS,BRL,EUR')
      //   .then(result => res.status(200).send(mapCotizaciones(result.data)))
      //   .catch(error => res.send(error));
      res.send(mapCotizaciones(
        {
          quotes: {
            USDARS: 76.86,
            USDBRL: 5.68,
            USDEUR: 0.85,
            USDUYU: 42.12,
            USDCAD: 1.32,
            USDCHF: 0.91,
            USDGBP: 0.77,
            USDCHL: 795
          }
        }
      ));
    } catch (error) {
      console.error('GG', error);
    }
  } else {
    res.status(200).send(value);
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
