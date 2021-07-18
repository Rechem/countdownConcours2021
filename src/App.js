import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Image from './assets/bg.jpg'
import CountDown from './components/CountDown';

const theme = createTheme({
  palette: {
    primary : {main:"#e67e22"},
    text:{
      primary: "#555",
      secondary : "#aaa"
    }
  },
  typography:{
    fontFamily: 'Arimo',
    h1:{
      fontSize : 104,
      fontWeight: 700,
    },
    h2:{
      fontSize : 48,
      fontWeight: 400,
    },
    body1:{
      fontSize : 24,
      fontWeight: 500,
    }
  }
});

const style = {
  height:"100vh",
  display:'-webkit-flex',
  justifyContent:"center",
  alignItems:"center",
  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${Image}) center center fixed`,
}


function App() {

  const countDownDate = new Date("Sep 18, 2021 09:00:00").getTime();
  const [countDown, setCountDown] = useState({days : 0,hours : 0, minutes : 0, seconds : 0})
  useEffect(() => {
    setInterval(function() {

      // Get today's date and time
      let now = new Date().getTime();
    
      // Find the time between now and the count down date
      let time = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((time % (1000 * 60)) / 1000);
    
      
      // If the count down is finished, write some text
      if (time < 0) {
        setCountDown({days : 0, hours : 0, minutes : 0, seconds : 0});
      }else{
        setCountDown({days : days, hours : hours, minutes : minutes, seconds : seconds});
      }
    }, 1000);
  }, []);

  

  return (
    <ThemeProvider theme={theme}>
      <Box style={style} >
        <CountDown
        days={countDown.days}
        hours={countDown.hours}
        minutes={countDown.minutes}
        seconds={countDown.seconds}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
