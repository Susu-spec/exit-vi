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
            >
                <video
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={videoUrl} 
                    loop={true}
                    playsInline
                    autoPlay={true}
                    muted
                    style={{ borderRadius: ".5rem" }}
                />
                <Span className="overflow-overlay" />
            </Flex>
        </LinkBox>
    )
}