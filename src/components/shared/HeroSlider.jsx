import { Box, Grid } from "@chakra-ui/react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';;
import HeroCard from "./HeroCard";

const videoUrls = [
    "https://app.vidzflow.com/v/uKzdfVEd1O?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=true&piv=false&playsinline=true&bc=%234E5FFD&controls=false",
    "https://app.vidzflow.com/v/VvLTqdZzSL?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false",
    "https://app.vidzflow.com/v/ILLpcsHOAB?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false",
    "https://app.vidzflow.com/v/n0sitYOKLw?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false",
    "https://app.vidzflow.com/v/GWazvydWJs?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false",
    "https://app.vidzflow.com/v/LCVDnqXAon?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false"
]


export default function HeroSlider() {
    return (
        <Grid className="hero-slider-container" paddingY="8vw" 
            columnGap="8vw" rowGap="8vw" flexFlow="column">
                <Box overflow="hidden" width="100%" position="relative" paddingLeft="1vw">
                    <Splide options={{
                        type: "slide",
                        perPage: 3,
                        gap: "1vw",
                        autoplay: true,
                        pauseOnHover: false,
                        arrows: false,
                        pagination: false,
                        drag: true,
                    }}
                    aria-label="Hero Video Slider"
                    className="slider1"
                    >
                        {videoUrls.map((url, index) => (
                            <SplideSlide className="home">
                                <HeroCard
                                    key={index}
                                    videoUrl={url}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </Box>
        </Grid>
    )
}