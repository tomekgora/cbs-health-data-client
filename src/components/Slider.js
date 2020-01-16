import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default class RangeSlider extends React.Component {
  //   const [value, setValue] = React.useState([20, 37]);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  render() {
    const useStyles = makeStyles({
      root: {
        width: 300
      }
    });
    // let classes = useStyles();
    return (
      <div>
        <Typography id="range-slider" gutterBottom>
          Starting year:
        </Typography>
        <Slider
          step={1}
          defaultValue={1920}
          min={1900}
          max={2018}
          name="slider"
          onChange={this.props.sliderChange}
          value={this.props.slider}
          // onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
    );
  }
}
