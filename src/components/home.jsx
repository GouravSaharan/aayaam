import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import { Divider } from '@mui/material';

function Home(props) {
    return (
        <Carousel
            autoPlay={true}
            interval={2500}
            sx={{ width: '100%', overflow: 'hidden' }}
        >
            {props.items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        }}
            id='home'
        >
            <img
                src={props.item.image}
                alt={props.item.name}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <Paper
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 100))',
                    color: 'white',
                    width: '100%',
                    padding: {
                        xs: '20px',
                        sm: '20px',
                        md: '100px',
                    },

                    display: 'flex',
                    flexDirection: {

                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                    },
                    alignItems: 'center',
                    gap: '20px',
                    justifyContent: 'center',

                }}
            >
                <Typography
                    sx={{
                        minWidth: {
                            xs: '100%',
                            sm: '100%',
                            md: '500px',
                        },

                        fontFamily: 'var(--font-family-sans-serif)',
                        fontSize: {
                            xs: '2em',
                            sm: '2em',
                            md: '3em',
                        },
                        fontWeight: 'bold',
                        lineHeight: '1.2',

                    }}
                >{props.item.name}
                    <Divider orientation="horizontal" flexItem
                        sx={
                            {
                                width: '70%',
                                margin: '10px 0',
                                backgroundColor: '#0252a1',
                                height: '5px',
                                borderRadius: '20px',
                                mt: 3,
                            }
                        }
                    />
                </Typography>
                <Typography
                    sx={
                        {
                            fontSize: '1.25rem',
                            fontFamily: 'var(--font-family-sans-serif)',
                            textAlign: 'justify',
                            alignSelf: 'start',

                        }
                    }
                >{props.item.description}</Typography>
            </Paper>
        </div>
    );
}

export default Home;
