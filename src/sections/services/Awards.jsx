import { Box, Flex } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { awards } from "../../lib/data";
import React from "react";

export default function Awards() {
    return (
        <Box
            columnGap="1vw"
            rowGap="1vw"
            paddingTop="4vw"
            paddingX="1vw"
            display="flex"
            flexDir="column"
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
                        arrows: false,
                        pagination: false,
                        drag: true,
                        keyboard: true,
                        autoHeight: true,
                        speed: 600,
                    }}
                >
                    <Flex
                        flexFlow="column"
                        justifyContent="flex-start"
                        width="100%"
                    >
                        {awards.map((award, index) => (
                            <SplideSlide key={index}>
                                <Box
                                    borderTop="1px solid #1d1d1d33"
                                    width="100%"
                                    paddingTop="1.5vw"
                                    paddingBottom="2.5vw"
                                    display="flex"
                                >
                                    <Box 
                                        width="10%"
                                        fontFamily="'Aeonik', sans-serif"
                                        fontSize=".9vw"
                                        lineHeight="1"
                                    >
                                        {award.order}
                                    </Box>
                                    <Box
                                        width="41%"
                                        fontFamily="'Aeonik', sans-serif"
                                        fontSize="1.5vw"
                                        lineHeight="120%"
                                    >
                                        {award.client}
                                    </Box>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        width="22%"
                                        fontSize=".9vw"
                                        lineHeight={1}
                                    >
                                        <p className="text label-info-awards">Project</p>
                                        <p className="text description-info-awards">{award.project}</p>
                                    </Flex>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        width="22%"
                                        fontSize=".9vw"
                                        lineHeight={1}
                                    >
                                        <p className="text label-info-awards">Category</p>
                                        <p className="text description-info-awards">
                                            {award.category.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < award.category.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </Flex>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        width="6%"
                                        fontSize=".9vw"
                                        lineHeight={1}
                                        textAlign="right"
                                    >
                                        <p className="text label-info-awards">Year</p>
                                        <p className="text description-info-awards">{award.year}</p>
                                    </Flex>
                                </Box>
                            </SplideSlide>
                        ))}
                    </Flex>
                </Splide>
            </Box>
        </Box>
    )
}