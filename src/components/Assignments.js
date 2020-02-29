import React from "react";
import "./Students.css";
import { makeStyles } from "@material-ui/core/styles";
import './Card.css'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {Button} from 'reactstrap';

let assignments = [
  {name: 'Multiplication', topic: "Maths", deadline: 'Jul 09', submissions: 4},
  {name: 'Gravity', topic: "Physics", deadline: 'Apr 09', submissions: 8},
  {name: 'Materials', topic: "Chemistry", deadline: 'Mar 04', submissions: 12},
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

export default function Students(props) {
  const classes = useStyles();

    return (
      <div>
        <Button
        style={{marginTop: 40, marginBottom: 50}}
        >
          Create a new assignment
        </Button>
      <div className={classes.list}>
      {assignments.map(assign => (
        <Card className={'card-container'} style={{ backgroundColor: '#ede7f6'}}>
            <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              {assign.name} ({assign.topic})
            </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              Deadline: {assign.deadline},     {assign.submissions} Submissions
            </Typography>
        </Card>
      ))}
    </div>
    </div>
    );
}


