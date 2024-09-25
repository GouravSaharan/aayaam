import React from 'react';
import { Box, Typography, Divider, Grid, Paper } from '@mui/material';
import Carousel from './aboutUs-crausel';

const cards = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Umang - Hindi Week"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Hindi Literary Competitions at Festember, Nittfest and Aaveg"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Dandiya Night"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Hindi Learning Classes"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Holi Hungama"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "NITT's annual Hindi magazine \"Pratibimb\""
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ8422M6FI6z3m6-REh9MkoVxhXUddwMHVYIBVS65_pZIc3jXl-zfn8PDgYJjzdh_RTo&usqp=CAU",
        "name": "Kavya Sandhya"
    }
];


function AboutUs() {
    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',
                padding: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
            }}
            id="about-us"
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-family-sans-serif)',
                    color: '#333',
                }}
            >
                About Us
            </Typography>

            <Paper elevation={3} sx={{ padding: { xs: '20px', sm: '30px', md: '40px' }, backgroundColor: '#d7dbdd' }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '20px',
                        textAlign: 'justify',
                    }}
                >
                    AAYAAM, the Hindi Cell of NITT, has been dedicated to nurturing and fortifying the cultural roots of the nation since its inception in 2004-05. Initially conceived by Hemant Kumar, Anirudh Roy, and Rahul Gadewadikar as a Hindi club, they unfortunately did not succeed in registering it as an official club. However, Mrinal Kumar and Sutikshana Pratap Kaushik, an alumnus from the 2007 batch, worked tirelessly towards the formation of the club, eventually being joined by other alumni members from the 2009 batch, including Siddharth Dubey, Suman Saurabh, Suneet Solanki, and Sapna Shukla. Finally, on August 6th, 2006, their efforts paid off as AAYAAM was officially registered as the Hindi Literary and Cultural Society of the National Institute of Technology Tiruchirappalli, cementing its place as an important cultural institution within the university.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '20px',
                        textAlign: 'justify',
                    }}
                >
                    AAYAAM provides an open platform to people willing to contribute to Hindi Literature. This literary group was the first of its kind in Tamil Nadu and South India, where Hindi is not widely spoken. The motive behind establishing Aayaam was to promote the love for Hindi in Trichy in general and NIT Trichy in particular. This Student's Society aims at keeping the elegance of the national language, Hindi, blossoming in NITT.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '20px',
                        textAlign: 'justify',
                    }}
                >
                    AAYAAM acts as one family where the members connect with their love for Hindi culture and traditions. Various competitions and events are conducted on a mass scale by them to promote the same. The members are brimming with confidence as they organize Hindi literary competitions at the inter-college and intra-college levels, providing a platform for those who admire Hindi literature and want to bring forward their creativity in story writing, poem composition, or any form of composition in Hindi. Apart from focusing on Hindi literature, celebrations for various cultural festivals like Holi, Hindi Diwas, Navratri, Diwali, Rashtriya Ekta Diwas, and many more are organized by AAYAAM.
                </Typography>
                <Carousel cards={cards} />
            </Paper>

        </Box>
    );
}




export default AboutUs;
