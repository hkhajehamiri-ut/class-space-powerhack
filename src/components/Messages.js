import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

let notes = [
  {studentName: 'Eldon', message: "I will need help with today's assignment. Can I drop by after class?"},
  {studentName: 'Ella', message: "Couldn't understand question 2 of quiz. Need a hint"},
  {studentName: 'Enrico', message: "My mom wants to talk to you"},
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
    backgroundColor: '#EEEEEE',
    color: 'black',
    fontFamily: 'Muli',
    cursor: 'pointer',
  },
  title: {
    color: 'black',
    fontFamily: 'Muli',
  },
  text: {
    margin: theme.spacing(1),
    width: 200,
  }
}));

export default function Messages(props) {
  const classes = useStyles();

  return (
    <div>
      {notes.map(note => (
        <Card className={classes.card} style={{ backgroundColor: '#ede7f6', paddingLeft: 15, paddingTop: 15, paddingBottom: 15}}>
            <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
              {note.studentName}:
            </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
              {note.message}
            </Typography>
        </Card>
      ))}
    </div>
  );
}


Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

