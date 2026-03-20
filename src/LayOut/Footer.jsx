import { Paper, Box, Typography } from '@mui/material';
import {FooterHeight, FooterTxtColor} from '../vars';
import React from "react";

function Footer() {
    return (
        <Paper
            variant="footer"
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height: FooterHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingX: 2
            }}
        >
            <Typography variant="body2" >
                &copy; {new Date().getFullYear()} Amir Dagan
            </Typography>
            <Typography variant="body2" >
                עיצוב: &nbsp;
                <a 
                    href="https://inbald6.wixsite.com/inbal-d-portfolio" 
                    target="_blank"
                    style={{ color: FooterTxtColor }}
                >
                    ענבל דגן
                </a>
            </Typography>
        </Paper>
    );
}

export default Footer;