import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './index.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}°C`;
}




export default function DiscreteSlider() {
  const classes = useStyles();



  const [value, setValue] = React.useState(30);

  const handleChangeSleep = (event, newValue) => {
  setValue(newValue);
  localStorage.setItem('sleep',newValue)
  };

  const handleChangeNutrition = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('nutrition',newValue)
  };
  const handleChangeHydration = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('hydration',newValue)
  };
  const handleChangeFamily = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('family',newValue)
  };
  const handleChangeFriends = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('friends',newValue)
  };
  const handleChangeIntimate = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('intimate',newValue)
  };
  const handleChangeVigorous = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('vigorous',newValue)
  };
  const handleChangeMovement = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('movement',newValue)
  };
  const handleChangeStanding = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('standing',newValue)
  };
  const handleChangeWork = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('work',newValue)
  };
  const handleChangeCreative = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('creative',newValue)
  };
  const handleChangeMeditation = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('meditation',newValue)
  };
  const handleChangeSubstance = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('substance',newValue)
  };
  const handleChangeUnhealthy = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('unhealthy',newValue)
  };
  const handleChangeSelfHarm = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('self-harm',newValue)
  };
  const handleChangeMental = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('mental',newValue)
  };





  console.log('value:', value);

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Sleep
      </Typography>
      <Slider
        classes
        className
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeSleep}
        color="primary"

      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Nutrition
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeNutrition}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Hydration
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeHydration}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Friends
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeFriends}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Family
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeFamily}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Intimate
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeIntimate}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Mental Challenge
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeWork}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Creativity
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeCreative}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Vigorous
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeVigorous}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Movement
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeMovement}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Standing
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeStanding}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Meditation
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeMeditation}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Substance Abuse
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeSubstance}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Unhealthy Relationships
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeUnhealthy}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Self Harm
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeSelfHarm}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Mental Clarity
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={handleChangeMental}
      />
    </div>



  );
}
