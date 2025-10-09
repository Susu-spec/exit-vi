import { Box } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { awards } from "../../lib/data";

export default function Awards() {
    return (
        <Box
            columnGap="1vw"
            rowGap="1vw"
            paddingTop="4vw"
            paddingX="1vw"
            display="flex"
            marginBottom="2vw"
        >
            <h2
                className="work-title">
                    An Award 
                    <br />
                    Winning Studio
            </h2>
            <Box
                marginTop="6vw"
                marginBottom="2vw"
            >
                <Splide
                    options={{
                        type: "slide",
                        perPage: 1,
                        perMove: 1,
                        gap: 0,
                        padding: 0,
                        arrows: true,
                        pagination: true,
                        drag: true,
                        keyboard: true,
                        autoHeight: true,
                        speed: 600,
                    }}
                >
                    {awards.map((award, index) => (
                        <SplideSlide key={index}>

                        </SplideSlide>
                    ))}
                </Splide>
            </Box>
        </Box>
    )
}