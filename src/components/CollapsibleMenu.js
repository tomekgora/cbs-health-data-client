import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   Mumps_6: false,
  //   Typhoid_7: false,
  //   Diphtheria_8: false,
  //   HepatitisA_9: false,
  //   WhoopingCough_10: false,
  //   LegionnairesDisease_11: false,
  //   Malaria_12: false,
  //   Measles_13: false,
  //   MeningococcalDisease_14: false,
  //   ParatyphoidB_15: false,
  //   Polio_16: false,
  //   QFever_17: false,
  //   Rubella_18: false,
  //   Shigella_19: false,
  //   Tuberculosis_20: false,
  //   AIDS_21: false,
  //   HIVInfected_22: false
  // });

  // const handleChange = event =>
  // setState(s => ({ ...s, [event.target.name]: !s[event.target.name] }));
  // const diseaseList = [
  //   { label: "Mumps", value: "Mumps_6" },
  //   { label: "Typhoid", value: "Typhoid_7" },
  //   { label: "Diphteria", value: "Diphtheria_8" },
  //   { label: "Hepatitis A", value: "HepatitisA_9" },
  //   { label: "Whooping Cough", value: "WhoopingCough_10" },
  //   { label: "Legionnaires Disease", value: "LegionnairesDisease_11" },
  //   { label: "Malaria", value: "Malaria_12" },
  //   { label: "Measles", value: "Measles_13" },
  //   { label: "Meningococcal Disease", value: "MeningococcalDisease_14" },
  //   { label: "Paratyphoid B", value: "ParatyphoidB_15" },
  //   { label: "Polio", value: "Polio_16" },
  //   { label: "QFever", value: "QFever_17" },
  //   { label: "Rubella", value: "Rubella_18" },
  //   { label: "Shigella", value: "Shigella_19" },
  //   { label: "Tuberculosis", value: "Tuberculosis_20" },
  //   { label: "AIDS", value: "AIDS_21" },
  //   { label: "HIV Infected", value: "HIVInfected_22" }
  // ];

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Date Range</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>TODO: Year selection</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Diseases</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup aria-label="position" column>
            {/* {Object.keys(state).map(key => {
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
            })} */}
            {/* {Object.keys(props.choices).map(key => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={props.onChange}
                      name={key}
                      color="secondary"
                      value={props.choices[key]}
                    />
                  }
                  label={key.substring(0, key.indexOf("_"))}
                  labelPlacement="end"
                />
              );
            })} */}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Chart Type</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>Line chart</p>
            <p>Bar chart</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
