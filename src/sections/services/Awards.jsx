import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { awards } from "../../constants/data";
import React from "react";

export default function Awards() {
    const pagination = useBreakpointValue({
        base: true,
        lg: false
    })

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
                className=""
            >
                <Splide
                    options={{
                        type: "slide",
                        perPage: 1,
                        perMove: 1,
                        gap: 0,
                        padding: 0,
                        arrows: false,
                        pagination: pagination,
                        drag: true,
                        keyboard: true,
                        autoHeight: true,
                        speed: 600,
                    }}
                    className="awards"
                >
                        {awards.map((award, index) => (
                            <SplideSlide key={index} className="awards">
                                <Box
                                    className="items-awards"
                                >
                                    <Box
                                        fontFamily="'Aeonik', sans-serif"
                                        className="order-awards"
                                    >
                                        {award.order}
                                    </Box>
                                    <Box
                                        fontFamily="'Aeonik', sans-serif"
                                        className="client-awards"
                                        lineHeight="120%"
                                    >
                                        {award.client}
                                    </Box>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        fontSize={{
                                            base: "4.4dvw",
                                            md: "1.9dvw",
                                            lg: ".9dvw"
                                        }}
                                        lineHeight={1}
                                        className="infos-awards"
                                    >
                                        <p className="text label-info-awards">Project</p>
                                        <p className="text description-info-awards">{award.project}</p>
                                    </Flex>
                                    <Flex
                                        columnGap=".5vw"
                                        rowGap=".5vw"
                                        flexFlow="column"
                                        fontSize={{
                                            base: "4.4dvw",
                                            md: "1.9dvw",
                                            lg: ".9dvw"
                                        }}
                                        lineHeight={1}
                                        className="infos-awards"
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
                                        fontSize={{
                                            base: "4.4dvw",
                                            md: "1.9dvw",
                                            lg: ".9dvw"
                                        }}
                                        lineHeight={1}
                                        className="award-year"
                                    >
                                        <p className="text label-info-awards">Year</p>
                                        <p className="text description-info-awards">{award.year}</p>
                                    </Flex>
                                </Box>
                            </SplideSlide>
                        ))}
                </Splide>
            </Box>
        </Box>
    )
}