import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Post from './post';
import Title from '../shared/section';

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

function Blog() {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/posts',
      );
      setPosts(result.data.posts);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {
        posts !== null
          ? (
            <Container maxWidth="xl" disableGutters>
              <Grid container className={classes.content}>
                <Grid item md={9} className={classes.leftPanel}>
                  <Title text="Posts" />
                  <Grid container spacing="1">
                    {
                      posts.map(post => (
                        <Grid item xs={4} key={post.title}>
                          <Post content={post} />
                        </Grid>
                      ))
                    }
                  </Grid>
                </Grid>
                <Grid item md={3} className={classes.rightPanel}>
                  <Title text="Left" />
                </Grid>
              </Grid>
            </Container>
          ) : <p>cargando</p>
      }
    </div>
  );
}

export default Blog;
