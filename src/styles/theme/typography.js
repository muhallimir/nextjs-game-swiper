import { createTheme } from '@mui/material';

const theme = createTheme();

const typography = {
    fontFamily: ['Gruffy Soft', 'sans-serif'].join(','),

    /* -------------------------------- variants -------------------------------- */

    h4: {
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: '21.88px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.563rem',
            lineHeight: '40px',
        },
    },
    body2: {
        fontWeight: 400,
        fontSize: '0.8rem',
        lineHeight: '14px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
};

export default typography;
