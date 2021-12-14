import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getData } from '../works/api';
import Information from './Information';

const useStyles = makeStyles({
    component: {
        padding: '20px',
        background: '#ae1846',
        borderRadius: '0 20px 0 0'
    },

    txtField: {
        color: '#fff',
        marginRight: 15,
        width: 195,
        fontSize: 25
    },

    weatherBut: {
        width: 140,
        height: 40,
        background: '#e67e22',
        color: '#fff',
        marginTop: 6,
        marginLeft: 15,
        fontSize: 14
    }
})

const Details = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            city && await getData(city, country).then(fetchedDetails => {
                getWeatherData(fetchedDetails.data);
                console.log(fetchedDetails.data);
            });
        }
        getWeather();
        handleClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return (
        <>
            <Box className={classes.component}>
                <TextField
                    inputProps={{ className: classes.txtField }}
                    onChange = {(e) => handleCityChange(e.target.value)}
                    label="Enter city"
                    className={classes.txtField}
                />
                <TextField
                    inputProps={{ className: classes.txtField }}
                    onChange = {(e) => handleCountryChange(e.target.value)}
                    label="Enter country"
                    className={classes.txtField}
                />
                <Button
                    className={classes.weatherBut}
                    variant="contained"
                    onClick={() => handleClick(true)}
                >Get Weather</Button>
            </Box>
            <Information data={data} />
        </>
    )
}

export default Details;