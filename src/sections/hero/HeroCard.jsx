import { Box, Flex, LinkBox, Span } from "@chakra-ui/react";

export default function HeroCard({ videoUrl }) {
    return (
        <LinkBox
            className="hero-card"
            bgColor="#F5F4F2"
            borderRadius=".5rem"
            width="100%"
            height="100%"
            pos="relative"
            // overflow="hidden"
        >
            <Flex
                zIndex="2"
                cursor="none"
                bgColor="#F5F4F2"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                pos="relative"
                // className="hero-video-container"
                // overflow="hidden"
            >
                <Span 
                    as="iframe"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    _loading="lazy"
                    src={videoUrl} 
                    // style={{ overflow: "hidden" }}
                />
                <Span className="overflow-overlay" />
            </Flex>
        </LinkBox>
    )
}