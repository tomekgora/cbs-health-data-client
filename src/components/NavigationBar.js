import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  userIcon: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.MenuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome to the page
          </Typography>
          <IconButton
            className={classes.userIcon}
            color="inherit"
            arial-label="logged-in"
          >
            <GroupIcon />
          </IconButton>
          <IconButton
            className={classes.userIcon}
            color="inherit"
            arial-label="logged-in"
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
