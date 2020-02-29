import React, { Component } from "react";
import "./Students.css";
import { makeStyles } from "@material-ui/core/styles";
import './Card.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Button} from 'reactstrap';

let games = [
  {gameName: 'Key Seeker', picture: "https://www.todaysparent.com/wp-content/uploads/2018/07/best-typing-games-for-kids-key-seeker.jpg"},
  {gameName: 'Quiz Master', picture: "https://www.weeklyquiz.co.uk/wp-content/uploads/2017/11/quiz-master-logo-300x250.jpg"},
  {gameName: 'True or False', picture: "https://www.gcurley.info/news/wp-content/uploads/2016/03/true-or-false.jpg"},
]

const useStyles = makeStyles(theme => ({
  root: {
    width: "40%",
    position: "relative",
    margin: "0 auto",
    fontFamily: 'Muli',
  },
  card: {
    margin: theme.spacing(3),
    borderRadius: 10,
    backgroundColor: '#ede7f6',
    color: 'black',
    fontFamily: 'Muli',
    display: 'flex',
    padding: '25px',
  },
  title: {
    color: 'black',
    fontFamily: 'Muli',
  },
  text: {
    margin: theme.spacing(1),
    width: 200,
  },
  list: {
    width: '85vw',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
  }
}));

export default function Games(props) {
  const classes = useStyles();

    return (
      <div>
      <Button
      style={{marginTop: 40, marginBottom: 50}}
      >
        Add a game
      </Button>
      <div className={classes.list}>
      {games.map(game => (
        <Card className={'card-container'} style={{ backgroundColor: '#ede7f6'}}>
          {/* <CardContent> */}
            <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
              {game.gameName}
            </Typography>
          {/* </CardContent> */}
          {/* <CardActions> */}
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom align="left"> */}
              <img
              alt='game picture'
              src={game.picture}
              style={{width: 250, marginLeft: 40, height: 180}}
              />

            {/* </Typography> */}
          {/* </CardActions> */}
        </Card>
      ))}
    </div>
    </div>
    );
}


