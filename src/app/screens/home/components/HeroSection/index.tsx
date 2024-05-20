import React from 'react';
import { Button, Container, Stack, Typography } from "@mui/material";
import ieltsPhoto from '../../../../../assets/photo/Image.png';
import "./styles.scss";

export function HeroSection() {
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
                        <Button className={'btn'}>
                            Explore now
                        </Button>
                    </Stack>
                </Container>
            </Stack>
        </div>
    );
}
