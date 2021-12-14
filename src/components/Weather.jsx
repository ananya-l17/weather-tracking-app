import { Box, makeStyles } from '@material-ui/core';
import bgImage from '../images/bg.jpg';
import Details from './Details';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftSide: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '90%',
        width: '30%',
        borderRadius: '20px 0 0 20px'
    },
    rightSide: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: '90%',
        width: '70%',
        borderRadius: '0 20px 20px 0'
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className = {classes.leftSide}></Box>
            <Box className = {classes.rightSide}>
                <Details/>
            </Box>
        </Box>
    )
}

export default Weather;