import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const Display = (props) => {
        return (
            <Box textAlign="center" width="160px">
                <Typography variant="h1" color='primary'>{props.children}</Typography>
                <Typography variant="body1" color='textSecondary'>{props.unit}</Typography>
            </Box>
        );
}

export default Display;