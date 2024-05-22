import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import penIcon from "../../../../../assets/icons/pen.svg";
import "./styles.scss";

export function PracticeMaterials() {
    const title = ["Listening Practice", "Speaking Practice", "Reading Practice", "Writing Practice"]
    return (
        <div className='practise-materials'>
            <Container maxWidth="xl">
                <Typography sx={{ textAlign: "left" }} className='title'>
                    Practice Materials
                </Typography>
                <Grid container className='box' justifyContent="space-between" spacing={2.5}>
                    {[1, 2, 3,4].map((value, index) => (
                        <Grid item xs={11} sm={5.5} md={2.8} key={value} className='card'>
                            <Box sx={{mb: 2}} display={"flex"} justifyContent={"center"}>
                               <img src={penIcon} alt="" />
                            </Box>
                            <Box sx={{mb: 2}} textAlign={"center"}>
                                <Typography className='text'>
                                    {title[index]}
                                </Typography>
                            </Box>
                            <Box textAlign={"center"}>
                                <Button className='btn'>Start Practice</Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
