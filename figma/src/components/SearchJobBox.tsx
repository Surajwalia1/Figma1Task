import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

// Import icons (Make sure they are stored in the `public` folder)
const searchIcon = "/Icon.png";
const locationIcon = "/Location.png";

const SearchJobBox: React.FC = () => {
  return (
    <Box
      sx={{
        width: '852px',
        height: '89px',
        padding: '16px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginTop: '20px',
      }}
    >
      {/* Job Title Search Bar */}
      <Box
        sx={{
          width: '305.5px',
          height: '57px',
          paddingRight: '16px',
          paddingLeft: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flex: 1,
          border: '1px solid #ccc',
        }}
      >
        <img src={searchIcon} alt="Search Icon" width={24} height={24} />
        <TextField
          placeholder="Job title or keyword"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: '16px',
              height: '100%',
              flex: 1,
            },
          }}
          fullWidth
        />
      </Box>

      {/* Location Search Bar */}
      <Box
        sx={{
          width: '305.5px',
          height: '57px',
          paddingRight: '24px',
          paddingLeft: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flex: 1,
          border: '1px solid #ccc',
        }}
      >
        <img src={locationIcon} alt="Location Icon" width={24} height={24} />
        
        <TextField
          select
          variant="standard"
          fullWidth
          defaultValue="Florence, Italy"
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: '16px',
              height: '100%',
              flex: 1,
            },
          }}
        >
          <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
          <MenuItem value="Paris, France">Paris, France</MenuItem>
          <MenuItem value="Berlin, Germany">Berlin, Germany</MenuItem>
          <MenuItem value="New York, USA">New York, USA</MenuItem>
          <MenuItem value="Tokyo, Japan">Tokyo, Japan</MenuItem>
          <MenuItem value="Sydney, Australia">Sydney, Australia</MenuItem>
        </TextField>
      </Box>

      {/* Search Button */}
      <Box
        component="button"
        sx={{
          width: '209px',
          height: '57px',
          background: '#4640DE',
          color: 'white',
          fontSize: '16px',
          fontWeight: '500',
          padding: '14px 27px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s',
          '&:hover': {
            background: '#3a36c9',
          },
        }}
      >
        Search my job
      </Box>
    </Box>
  );
};

export default SearchJobBox;
