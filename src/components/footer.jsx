import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: 'black',
          color: '#fff',
          py: 4,
          px: {
            xs: 2,
            sm: 4,
            md: 10,
          },
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          gap: 4,
        }}
      >
        <Box sx={{ flex: '1 1 200px', minWidth: '200px', marginBottom: 2,}}>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            NIT TRICHY
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontFamily: 'var(--font-family-sans-serif)',
              color: '#6b6b6b',
            }}
          >
            Tanjore Main Road, NH67,<br />
            near BHEL, Tiruchirappalli,<br />
            Tamil Nadu 620015
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontFamily: 'var(--font-family-sans-serif)',
              my: 2,
            }}
          >
            +91 431 250 4135
          </Typography>
        </Box>

        <Box sx={{ flex: '1 1 200px', minWidth: '200px', marginBottom: 2 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            AAYAAM, NIT TRICHY
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontFamily: 'var(--font-family-sans-serif)',
              my: 2,
            }}
          >
            1234567894
          </Typography>
          <Link href="mailto:deansw@nitt.edu" color="#FFF">
            aayaam@nitt.edu
          </Link>
        </Box>

        <Box
          sx={{
            flex: '1 1 200px',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start', lg:"flex-start" },
            alignItems: 'center',
            gap: 2,
            width: '100%',
          }}
        >
          <IconButton
            sx={{
              color: 'white',
            }}
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              color: 'white',
            }}
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: 'white',
            }}
            aria-label="YouTube"
          >
            <YouTube />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center', py: 2, backgroundColor: '#121213' }}>
        <Typography
          variant="body2"
          fontSize="1.25rem"
          color="#6b6b6b"
        >
          © 2021 Aayaam. All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
