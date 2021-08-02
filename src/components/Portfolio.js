import React from "react";
import "./Portfolio.css";
import { portfolioData } from "../data";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "10px",
    marginBottom: "10px",
  },
  media: {
    height: 200,
    width: "100%",
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <div className='portfolio' id='portfolio'>
      <div className='heading'>
        <h1>
          MY <span style={{ color: "#266150 " }}>Portfolio </span>
        </h1>
      </div>
      <div className='all__portfolio'>
        {portfolioData.map((item, index) => {
          const { title, description, techUsed, image, url } = item;
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {title}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {description}
                  </Typography>
                  <Typography variant='body2' color='textPrimary' component='p'>
                    Tech Used: {techUsed}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <a href={url} target='_blank'>
                    {" "}
                    Visit Link
                  </a>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
