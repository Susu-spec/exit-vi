import { Box, Flex, Text } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { awards } from "../../constants/data";
import React from "react";

export default function Awards() {
    return (
        <Box
            columnGap={{
                base: "2vw",
                lg: "1vw"
            }}
            rowGap={{
                base: "2vw",
                lg: "1vw"
            }}
            paddingTop={{
                base: "6vw",
                lg: "4vw"
            }}
            paddingX={{
                base: "2vw",
                lg: "1vw"
            }}
            display="flex"
            flexDir="column"
            marginBottom={{
                base: "4vw",
                lg: "2vw"
            }}
        >
            <Text
                as="h2"
                className="work-title"
                fontSize={{
                    base: "14vw",
                    md: "9vw",
                    lg: "7vw"
                }}>
                    An Award 
                    <br />
                    Winning 
                    <Box
                        display={{
                            base: "block",
                            lg: "none"
                        }}></Box>
                    Studio
            </Text>
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
                                        fontSize={{
                                            base: "2.6vw",
                                            md: "2vw",
                                            lg: "1.5vw"
                                        }}
                                        lineHeight="120%"
                                    >
                                        {award.client}
                                    </Box>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        width="22%"
                                        fontSize={{
                                            base: "1.2vw",
                                            lg: ".9vw"
                                        }}
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
                                        alignItems="flex-end"
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