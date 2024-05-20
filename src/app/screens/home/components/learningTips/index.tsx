import React from 'react';
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import FaceIcon from "../../../../../assets/icons/faces.svg"
import WhatshotIcon from "../../../../../assets/icons/whatshot.svg"
import BedtimeIcon from "../../../../../assets/icons/bedtime.svg"
import "./styles.scss"

export function LearningTips() {
    return (
        <div className='learning-tips'>
            <Container maxWidth="xl">
                <Stack className={"box"}>
                    <Grid 
                        container 
                        spacing={2}
                        columns={{ xs: 4, sm: 4, md: 12 }}
                        direction="row"
                        justifyContent = {{xs: 'center', sm: 'center', md: 'space-between'}}
                        alignItems="flex-start">
                        <Grid className='inner-box'>
                            <img src={FaceIcon} alt='happy-learning' className={"icon"}/>
                            <Stack>
                                <Typography variant="h2" className='title'>
                                    Happy learning
                                </Typography>
                                <Typography variant="body1" className='text'>
                                    Achieve your IELTS goals with our comprehensive practice materials.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid className='inner-box'>
                            <img src={WhatshotIcon} alt='happy-learning' className={"icon"}/>
                            <Stack>
                                <Typography variant="h2" className='title'>
                                    Effective Learning
                                </Typography>
                                <Typography variant="body1" className='text'>
                                    Enhance your skills and get instant feedback.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid className='inner-box'>
                            <img src={BedtimeIcon} alt='happy-learning' className={"icon"}/>
                            <Stack>
                                <Typography variant="h2" className='title'>
                                    Boost Confidence
                                </Typography>
                                <Typography variant="body1" className='text'>
                                    Feel confident and prepared for your IELTS exam.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </div>
    );
}
