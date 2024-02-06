import React from 'react';
import { Box, Typography, Button, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@store/app.slice';

function Header() {
  const { theme: mode } = useSelector(({ app }) => app)
  const dispatch = useDispatch()
  const darkMode = mode === 'dark'

  const toggleTheme = () => {
    if (mode === 'dark') {
      dispatch(switchTheme('light'))
    } else {
      dispatch(switchTheme('dark'))

    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: darkMode ? 'common.black' : 'common.white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="primary">
        CASINO
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ marginRight: '1rem', color: darkMode ? 'common.white' : 'common.black' }}>
          {darkMode ? 'Dark' : 'Light'} Mode
        </Typography>
        <Switch
          checked={mode === 'dark'}
          onChange={toggleTheme}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default Header;
