import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FaBookOpen, FaQuestionCircle, FaUsers, FaUserEdit, FaComment, FaGamepad, FaCalendarAlt } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import PollIcon from "@material-ui/icons/Poll";
import { NavLink as RouterNavLink } from "react-router-dom";

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
          <RouterNavLink to="/lessons" exact>
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
          </RouterNavLink>

          <RouterNavLink to="/students" exact>
          <ListItem button>
            <ListItemIcon>
          <FaUsers size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            My Students
            </Typography>
            </ListItemText>
          </ListItem>
          </RouterNavLink>

          <RouterNavLink to="/assignments" exact>
          <ListItem button>
            <ListItemIcon>
          <FaUserEdit size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Assignments
            </Typography>
            </ListItemText>
          </ListItem>
          </RouterNavLink>

          <RouterNavLink to="/quiz" exact>
          <ListItem button>
            <ListItemIcon>
          <FaQuestionCircle size={37}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Quizzes
            </Typography>
            </ListItemText>
          </ListItem>
          </RouterNavLink>

          <ListItem button>
            <ListItemIcon>
          <PollIcon style={{ fontSize: 42 }} className={classes.poll}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Polls
            </Typography>
            </ListItemText>
          </ListItem>

          <RouterNavLink to="/games" exact>
          <ListItem button>
            <ListItemIcon>
          <FaGamepad style={{ fontSize: 42 }} className={classes.poll}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Games
            </Typography>
            </ListItemText>
          </ListItem>
          </RouterNavLink>

          <ListItem button>
            <ListItemIcon>
          <FaCalendarAlt style={{ fontSize: 42 }} className={classes.poll}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Events
            </Typography>
            </ListItemText>
          </ListItem>

          <RouterNavLink to="/events" exact>
          <ListItem button>
            <ListItemIcon>
          <FaComment style={{ fontSize: 42 }} className={classes.poll}/>
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro', fontSize: '1.1rem', color: 'black'}}>
            Chat
            </Typography>
            </ListItemText>
          </ListItem>
          </RouterNavLink>

        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
