import React from 'react';
import Header from '../components/Header';
import { Box, Typography, Button } from '@mui/material';
import SearchJobBox from '../components/SearchJobBox';
import Title from '../assets/Title';
import FeaturedCompanycopy from '../assets/FeaturedCompanycopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Main Container */}
      <Box
        sx={{
          width: '629px',
          height: '530.58px',
          position: 'absolute',
          top: '160px',
          left: '125px',
          gap: '23px',
        }}
      >
        {/* SVG Title */}
        <Title />

        {/* Text */}
        <Typography
          sx={{
            width: '521px',
            height: '64px',
            opacity: 0.7,
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '32px',
            color: ' #515B6F',
          }}
        >
          Great platform for the job seeker that searching for new career heights and passionate about startups.
        </Typography>

        {/* Search Box Component */}
        <SearchJobBox />

        {/* Companies We Helped Grow Text */}
        <Typography
          sx={{
            width: '243px',
            height: '29px',
            opacity: 0.5,
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28.8px',
            color: '#515B6F',
          }}
        >
          Companies we helped grow
        </Typography>

        {/* Featured Company Copy Container */}
        <Box
          sx={{
            width: '100%',  // Fill container width
            paddingTop: '10px', // Add padding at the top
            paddingBottom: '10px', // Add padding at the bottom
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ width: '1190px' }}>
            <FeaturedCompanycopy />
          </Box>
        </Box>

        {/* Explore by Category Container */}
        <Box sx={{
          height: '53px',
          alignItems: 'center',
          width: '100%',
        }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '30px',
            }}
          >
            {/* Left Text */}
            <Typography
              sx={{
                fontFamily: 'Clash Display Variable, sans-serif',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '52.8px',
                color: '#515B6F',
              }}
            >
              <span style={{ color: '#25324B' }}>Explore by</span>
              <span style={{ color: '#26A4FF' }}> category</span>
            </Typography>

            {/* Right Text and Arrow Button */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '25.6px',
                  color: '#515B6F',
                  textAlign: 'center',
                }}
              >
                Show all jobs
              </Typography>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                  backgroundColor: '#515B6F',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#3c4950',
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              />
            </Box>
          </Box>
        </Box>

        {/* New Container for Cards */}
        <Box
          sx={{
            width: '100%',
            height: '460px',
            paddingTop: '32px',
           
            paddingRight: '124px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '80px',
            position: 'relative',
            top: '173px',
          }}
        >
          {/* Card 1 */}
          {[...Array(8)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: '214px',
                border: '1px solid #ddd',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              <img
                src="/card1.png"
                alt="Card Icon"
                style={{
                  width: '48px',
                  height: '48px',
                  marginBottom: '16px',
                }}
              />
              <Typography
                sx={{
                  width: '210px',
                  height: '29px',
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#515B6F',
                  lineHeight: '29px',
                }}
              >
                Design
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#515B6F',
                  }}
                >
                  235 jobs available
                </Typography>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#26A4FF',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#1f90d1',
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
