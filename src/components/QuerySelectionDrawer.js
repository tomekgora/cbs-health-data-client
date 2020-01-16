import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import CollapsibleMenu from "./CollapsibleMenu";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "./Slider";
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
      {/* <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Choose Period</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Slider value={props.slider.value} />
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Disease Choice</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={props.onSubmit}>
            <FormGroup aria-label="position" column>
              {Object.keys(props.choices).map(key => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={props.onChange}
                        name={key}
                        color="secondary"
                        checked={props.choices[key]}
                      />
                    }
                    label={key.substring(0, key.indexOf("_"))}
                    labelPlacement="end"
                  />
                );
              })}
            </FormGroup>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={toggleDrawer("left", false)}
            >
              Submit choices
            </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <CollapsibleMenu
        choices={props.choices}
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      /> */}
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

{
  /* {Object.keys(state).map(key => {
              return (
                <FormControlLabel
                  label={key.substring(0, key.indexOf("_"))}
                  labelPlacement="end"
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name={key}
                      key={key}
                      checked={state[key]}
                    />
                  }
                />
              );
            })} */
}
