import { useState, useEffect } from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import Carousel from './highlights-crausel';

const cards = [
  {
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
  {
  "img": "https://culturals.iitbhilai.ac.in/res/carousel/5.jpg"
  },
];


export default function Highlights() {
  
  const [image,setimage] = useState("");

  return (
    <Box>
 
      <Carousel cards={cards} />
    </Box>

  );
}
