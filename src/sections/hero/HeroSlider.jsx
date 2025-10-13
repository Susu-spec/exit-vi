import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import HeroCard from "../../sections/hero/HeroCard";
import { useCursor } from "../../context/CursorProvider";

const videoUrls = [
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642111/bheeicedy3ihyzyn31iuum3m4cldsk8dqlxe_wh4lip.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642078/bheeicedz8a5tcbo6sr84repcz7zjtyfocua_zaf61j.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/ILLpcsHOAB_576p_1744824343_vu4fee.mp4",
    "https://res.cloudinary.com/dgafp4dx4/video/upload/v1760203506/bheeiced5jnufmkv27k6gsr8vdhpjn2romax_dicsna.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/GWazvydWJs_576p_1744824344_wyftge.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639607/LCVDnqXAon_576p_1751149542_a65jqv.mp4"
]


export default function HeroSlider() {
    const cursor = useCursor();
    const { setDrag, setView, setDefault } = cursor;
    const fixedWidth = useBreakpointValue({
        base: "calc(80% + 0vw)",
        lg: "calc(33.3333% - 0.666667vw)"
    })

    const pagination = useBreakpointValue({
        base: true,
        lg: false
    });

    const gap = useBreakpointValue({
        base: "3vw",
        lg: "1vw"
    })

    const perPage = useBreakpointValue({
        base: 1,
        lg: 3
    })

    return (
        <Grid 
            paddingY={{
                base: "14vw",
                lg: "8vw"
            }} 
            className="hero-slider-container"
            columnGap="8vw" 
            rowGap="8vw" 
            flexFlow="column"
            onMouseEnter={setDrag}
            onMouseDown={setDrag}
            onMouseLeave={setDefault}
        >
                <Box overflow="hidden" width="100%" height="100%" position="relative" paddingLeft="1vw">
                    <Splide options={{
                        type: "slide",
                        perPage: perPage,
                        perMove: 1,
                        gap: gap,
                        autoplay: false,
                        pauseOnHover: false,
                        arrows: false,
                        pagination: pagination,
                        drag: true,
                        fixedWidth: fixedWidth,
                    }}
                    aria-label="Hero Video Slider"
                    className="hero-slider-container"
                    >
                        {videoUrls.map((url, index) => (
                            <SplideSlide>
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