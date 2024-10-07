import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About us', 'Highlights', 'Events', 'Magazine', 'Members', 'Contact Us'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavItemClick = (page) => {
        if (page === "Contact Us") {
            navigate('/contact-us');
        } 
        else if (page === "Members") {
            navigate('/MemberSection');
        } else {
            navigate('/');
            const element = document.getElementById(page.replace(/\s+/g, '-').toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        handleCloseNavMenu();
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                py: 0,
                px: { xs: 0, sm: 0, md: 5, lg: 8 },
                boxShadow: '0 8px 8px rgba(0, 0, 0, 0.4)',
            }}
        >
            <Box sx={{ margin: '0 10px' }}>
                <Toolbar disableGutters sx={{ minHeight: '64px', padding: 0 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="./logo.webp" alt="Aayaam Logo" style={{ height: '90px', marginRight: '10px' }} />
                        <img src='./aayaam_logo.png' alt="Aayaam Logo" style={{ height: '50px' }} />
                    </Typography>

                    

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            alignItems: 'center',
                        }}
                    >
                        <img src="./logo.webp" alt="Aayaam Logo" style={{ height: '90px', marginRight: '10px' }} />
                        <img src='./aayaam_logo.png' alt="Aayaam Logo" style={{ height: '50px' }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent:"end" }}>
                        <IconButton
                            size="large"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => handleNavItemClick(page)}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                            color: 'red',
                                        },
                                        color: 'black',
                                    }}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', lg: 'flex' },
                            justifyContent: 'end',
                            gap: 2,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    mx: 2,
                                    fontWeight: 500,
                                    color:"black",
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                        color: 'red',
                                    },
                                }}
                                onClick={() => handleNavItemClick(page)}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Navbar;
