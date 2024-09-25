import React, { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Contact() {
    // Create a reference to the form element
    const form = useRef();

    // Placeholder function to handle email sending
    const sendEmail = (e) => {
        e.preventDefault();
        // Logic for sending email
        console.log("Email sent");
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75%",
                backgroundColor: "#fff",
                padding: 2,
            }}
        >
            <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    maxWidth: "1100px",
                    width: "100%",
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        color: "#000000",
                        marginBottom: 5,
                    }}
                >
                    Contact Us
                    <Box
                    sx={{
                        width: "100px",
                        height: "7px",
                        backgroundColor: "#1976d2",
                        borderRadius: 2,
                        marginTop: 1,
                    }}
                    ></Box>
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        gap: 10,
                        justifyContent: "start",
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {xs:"column", sm:"row", md:"column", lg:"column"},
                            gap: 3,
                            color: "#000",
                            minWidth:206
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap:2
                            }}>

                            <LocationOnIcon sx={{ color: "#1976d2", fontSize: 60, background: "#d7dbdd", p: 1, borderRadius: 2 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "Column",
                                }}>

                                <h3>Location</h3>

                                <p>NIT Trichy, 620015</p>

                            </Box>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap:2
                            }}>

                            <EmailIcon sx={{ color: "#1976d2", fontSize: 60, background: "#d7dbdd", p: 1, borderRadius: 2 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "Column"
                                }}>

                                <h3>Email</h3>

                                <p>aayaam@nitt.edu</p>

                            </Box>

                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap:2
                                }}>

                                <PhoneAndroidIcon sx={{ color: "#1976d2", fontSize: 60, background: "#d7dbdd", p: 1, borderRadius: 2 }} />

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "Column"
                                    }}>

                                    <h3>Phone</h3>

                                    <p>1234567891</p>

                                </Box>

                            </Box>

                        </Box>

                    </Box>

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={2}
                        width={{xs:"100%", sm:"100%", md:"800px"}}
                        >


                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 2
                            }}
                        >
                            <TextField
                                name="Name"
                                label="Name"
                                required
                                fullWidth
                                sx={{ flex: 1 }}
                            />
                            <TextField
                                name="Email"
                                label="Email"
                                type="email"
                                required
                                fullWidth
                                sx={{ flex: 1 }}
                            />
                        </Box>
                        <TextField
                            name="Subject"
                            label="Subject"
                            fullWidth
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            name="message"
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                            sx={{
                                "& textarea": {
                                    resize: "vertical"
                                }
                            }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon />}
                                sx={{
                                    mt: 2,
                                    textTransform: "none",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                    backgroundColor: "#1976d2",
                                    "&:hover": {
                                        backgroundColor: "#1565c0"
                                    }
                                }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
