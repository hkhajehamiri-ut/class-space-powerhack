import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import './Card.css'
import Typography from '@material-ui/core/Typography';
import {Button} from 'reactstrap';

let notes = [
  {lessonName: 'Chemistry', date: "Week 2"},
  {lessonName: 'Maths', date: "Week 2"},
  {lessonName: 'Literacy', date: "Week 2"},
]

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
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

export default function Lessons(props) {
  const classes = useStyles();

  return (
    <div>
    <Button
    style={{marginTop: 40, marginBottom: 50}}
    >
      Add a new lesson
    </Button>
    <div className={classes.list}>
      {notes.map(note => (
        <Card className={'card-container'} style={{ backgroundColor: '#ede7f6'}}>
            <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              {note.lessonName}
            </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              {note.date}
            </Typography>
        </Card>
      ))}
    </div>
    </div>
  );
}



