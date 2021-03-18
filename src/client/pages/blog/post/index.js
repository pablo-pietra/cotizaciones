import React from 'react';
import PropTypes, { string } from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    marginBottom: theme.spacing(1)
  },
  media: {
    height: 200
  }
}));

function Post({ content }) {
  const classes = useStyles();

  const history = useHistory();

  function handleClick() {
    history.push(`/blog/${content.slug}`);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image="/public/react.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1">
            {content.title}
          </Typography>
          <Typography gutterBottom variant="overline">
            {content.creationDate}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {content.subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    creationDate: PropTypes.instanceOf(Date),
    subTitle: PropTypes.string,
    slug: PropTypes.string
  }).isRequired
};

export default withRouter(Post);
