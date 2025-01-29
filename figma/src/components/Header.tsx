// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Divider } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        height: '78px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '124px',
        paddingRight: '124px',
        backgroundColor: 'white', // Beige background color
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo and JobHuntly Text */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/Frame 3.png"
            alt="Logo"
            style={{ width: '32px', height: '32px', marginTop: '18px' }} // Adjusted marginTop for proper vertical alignment
          />
          <Typography
            variant="h6"
            sx={{
              width: '120px',
              height: '36px',
              marginTop: '18px', // Adjusted marginTop for proper vertical alignment
              marginLeft: '40px',
              color: 'blue', // Blue color for the text
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '25.6px',
            }}
          >
            JobHuntly
          </Typography>

          {/* Buttons to the left of JobHuntly */}
          <Box sx={{ display: 'flex', gap: '16px', marginLeft: '48px', alignItems: 'center' }}>
            <Button
              variant="outlined"
              sx={{
                height: '54px',
                border: 'none', // Remove border color
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '25.6px',
                marginTop: '8px', 
              }}
            >
              Find Jobs
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: '54px',
                border: 'none', // Remove border color
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '25.6px',
                
              }}
            >
              Browse Companies
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button
            variant="text"
            sx={{
              width: '92px',
              height: '50px',
              borderRadius: '4px',
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              gap: '10px',
              fontSize: 'medium',
            }}
          >
            Login
          </Button>

          {/* Divider between Login and SignUp */}
          <Divider orientation="vertical" flexItem sx={{ margin: '0 10px' }} />

          <Button
            variant="contained"
            sx={{
              width: '108px',
              height: '50px',
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              gap: '10px',
              fontSize: 'medium',
            }}
          >
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
