import React, { Component } from "react";
import "./Students.css";
import { makeStyles } from "@material-ui/core/styles";
import './Card.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Button} from 'reactstrap';

let quizzez = [
  {name: 'Addition Pop Quiz', picture: "https://lh3.googleusercontent.com/proxy/iJrZk9awGCmu7APilbe2h-WB8IE6OrGnthLL9-gkqIByKmAxSknU1IU_Gpe2R6C88ipCnox6VeABzLDj18TNqMA5QbVO2ioiPaL4V0TX866BwSy0rZO9dajzbI_BhKGkxU_CjrS38ngWm-UdqKqJwzc6pZ5VlSZFcULw25nskWdfieF-I7rC7l_R_X5erqkoKVRnP0C8gdNLp0tb6G6QB2c6GVyTWI8xMWQ6ZxKgJgG3UuilxPqIy6lwcs3J9fMoixkaC028onWn879eRB9Ca68"},
  {name: 'Chemistry Materials', picture: "https://lh3.googleusercontent.com/proxy/vFWTC4L2kkNHaieS5wUKs4VkUQ19F4fNfL3AoATVXZYgHJaQEfvTGOjSSb7kONQ6dv7KF9KEFYwAxNxzq--COUH7o2wKZhPPfMr_101enriBOYL7OLrMPpRt1bCcinRkRQ"},
  {name: 'Physics Gravity', picture: "https://cdn.britannica.com/s:800x450,c:crop/98/179998-138-B6126939/Overview-gravity-focus.jpg"},
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

export default function Quiz(props) {
  const classes = useStyles();

    return (
      <div>
      <Button
      style={{marginTop: 40, marginBottom: 50}}
      >
        Create a quiz
      </Button>
      <div className={classes.list}>
      {quizzez.map(quiz => (
        <Card className={'card-container'} style={{ backgroundColor: '#ede7f6'}}>
          {/* <CardContent> */}
            <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
              {quiz.name}
            </Typography>
          {/* </CardContent> */}
          {/* <CardActions> */}
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom align="left"> */}
              <img
              alt='game picture'
              src={quiz.picture}
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


