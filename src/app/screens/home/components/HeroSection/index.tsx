import React from 'react';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ieltsPhoto from '../../../../../assets/photo/Image.png';
import "./styles.scss";
import { useGlobals } from '../../../../hooks/useGlobals';

export function HeroSection(props: any) {
   const { setSignupOpen } = props;
   const { authMember } = useGlobals();

    return (
        <div className='hero-section'>
            <Stack>
                <img src={ieltsPhoto} alt="ban" />
                <Container maxWidth="xl">
                    <Stack className={"title"} sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Typography className="title-text" sx={{ textAlign: "center" }}>
                            Improve your IELTS score with us
                        </Typography>
                    </Stack>
                    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Box className={"signup"}>
                        {!authMember ? (
                            <Button 
                                variant={"contained"} 
                                sx={{width: "200px", height: "50px"}}
                                className={"signup-button"}
                                onClick={() => setSignupOpen(true)}
                                >
                                SIGN UP
                            </Button>
                        ) : null}
                        </Box>
                    </Stack>
                </Container>
            </Stack>
        </div>
    );
}
