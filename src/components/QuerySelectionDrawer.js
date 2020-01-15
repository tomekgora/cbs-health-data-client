import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import CollapsibleMenu from "./CollapsibleMenu";
// import { ClickAwayListener } from "@material-ui/core";

// Needs appropriate container to work

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function QuerySelectionDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <CollapsibleMenu
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>Graph Options</Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
