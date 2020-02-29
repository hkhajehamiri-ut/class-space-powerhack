import React, { Component } from "react";
import "./Students.css";
import { makeStyles } from "@material-ui/core/styles";
import './Card.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Button} from 'reactstrap';

let students = [
  {studentName: 'Eldon Marquiz', picture: "https://thumbs.dreamstime.com/b/portrait-asian-elementary-school-student-year-old-schoolboy-88319886.jpg"},
  {studentName: 'Ella Smith', picture: "https://pngimage.net/wp-content/uploads/2018/06/student-study-png-6.png"},
  {studentName: 'Enrico Macias', picture: "https://www.jing.fm/clipimg/full/72-728072_student-child-png-7-png-image-student.png"},
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
        Add a student
      </Button>
      <div className={classes.list}>
      {students.map(student => (
        <Card className={'card-container'} style={{ backgroundColor: '#ede7f6'}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
              {student.studentName}
            </Typography>
          </CardContent>
          <CardActions>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom align="left"> */}
              <img
              alt='student picture'
              src={student.picture}
              style={{width: 250, marginLeft: 40, height: 180}}
              />

            {/* </Typography> */}
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
    );
}


