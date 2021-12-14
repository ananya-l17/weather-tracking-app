import { Box, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';


const useStyles = makeStyles({
    component: {
        margin: 50
    },
    details: {
        marginLeft: 25,
        padding: 12,
        fontSize: 22,
        letterSpacing: 2
    },
    value: {
        color: '#fff'
    },
    icons: {
        marginRight: 15,

    }
})

const Information = ({data}) => {
    const classes=useStyles();
    return (
        data ? 
        <Box className={classes.component}>
            <Typography className={classes.details}><LocationOnIcon className={classes.icons}/>Location: <Box className={classes.value} component="span">{data.name}, {data.sys.country}</Box></Typography>
            <Typography className={classes.details}><SettingsBrightnessIcon className={classes.icons}/>Temperature: <Box className={classes.value} component="span">{data.main.temp}°C</Box></Typography>
            <Typography className={classes.details}><OpacityIcon className={classes.icons}/>Humidity: <Box className={classes.value} component="span">{data.main.humidity}%</Box></Typography>
            <Typography className={classes.details}><Brightness5Icon className={classes.icons}/>Sunrise: <Box className={classes.value} component="span">{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.details}><Brightness6Icon className={classes.icons}/>Sunset: <Box className={classes.value} component="span">{new Date(data.sys.sunset*1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.details}>< DehazeIcon className={classes.icons}/>Condition: <Box className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
            <Typography className={classes.details}><FilterDramaIcon className={classes.icons}/>Clouds: <Box className={classes.value} component="span">{data.clouds.all}%</Box></Typography>
        </Box> : ''
    )
}

export default Information;