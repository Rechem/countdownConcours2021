import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Display from './Display';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const CountDown = (props) => {

    const theme = useTheme()

    const useStyles = makeStyles({
        root: {
          padding : theme.spacing(4),
          maxWidth : 800
        },
        ctnt : {
            padding: 0,
            
        }
      });

    const classes = useStyles();
    const isOver = props.days == 0 && props.hours == 0 && props.minutes == 0 && props.seconds == 0
    
    return (
        <Card className={classes.root} elevation={1}>
            <CardContent className={classes.ctnt}>
                <Box textAlign="center" margin="0 auto 24px auto">
                    <Typography variant="h2" color="textPrimary">Concours MI 2021</Typography>
                </Box>
                {isOver ? 
                <Box textAlign="center">
                    <Typography variant="h1" color="Primary">It's happening!</Typography>
                </Box> :
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <Display unit="Days">{props.days}</Display>
                        </Grid>
                        <Grid item xs={3}>
                            <Display unit="Hours">{props.hours}</Display>
                        </Grid>
                        <Grid item xs={3}>
                            <Display unit="Minutes">{props.minutes}</Display>
                        </Grid>
                        <Grid item xs={3}>
                            <Display unit="Seconds">{props.seconds}</Display>
                        </Grid>
                    </Grid>
                }
            </CardContent>
        </Card>
    );
};

export default CountDown;