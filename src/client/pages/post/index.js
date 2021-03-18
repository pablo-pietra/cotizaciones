import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

import Share from './share';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F5F5F5'
  },
  content: {
    marginTop: theme.spacing(8)
  },
  leftPanel: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(8),
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
  image: {
    display: 'block',
    margin: theme.spacing(1, 0)
  }
}));

function Post() {
  const classes = useStyles();
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/post/${slug}`,
      );
      setPost(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Share />
      {
        post !== null
          ? (
            <Container maxWidth="xl" disableGutters>
              <Grid container className={classes.content}>
                <Grid item md={9} className={classes.leftPanel}>
                  <Typography variant="h3">{post.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{post.subTitle}</Typography>
                  <Divider />
                  <Typography variant="caption">{post.creationDate}</Typography>
                  <img className={classes.image} src={post.image} alt={post.title} />
                </Grid>
                <Grid item md={3} className={classes.rightPanel}>
                  <Typography>left panel</Typography>
                </Grid>
              </Grid>
            </Container>
          ) : <p>cargando</p>
      }
    </div>
  );
}

export default Post;
