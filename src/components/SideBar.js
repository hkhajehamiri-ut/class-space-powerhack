import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FaBookOpen, FaQuestionCircle, FaUsers, FaUserEdit, FaComment } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import PollIcon from "@material-ui/icons/Poll";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#ede7f6'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List style={{fontFamily: 'Source Sans Pro'}} >
          <ListItem button>
            <ListItemIcon>
          <FaBookOpen size={37}/>
            </ListItemIcon>
            <ListItemText >
              <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            My Lessons
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaUsers size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem'}}>
            My Students
            </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaUserEdit size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem'}}>
            Assignments
            </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaQuestionCircle size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem'}}>
            Quizzes
            </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <PollIcon style={{ fontSize: 42 }} color={'#a85db5'} className={classes.poll}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem'}}>
            Polls
            </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
      <FaComment style={{marginTop: 140, marginRight: 30, color: '#a85db5'}} size={70} className='fa-flip-horizontal'/>
    </div>
  );
}
