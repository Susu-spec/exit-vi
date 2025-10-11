import { Box, Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

export default function ScrollMarquee() {
    const containerRef = useRef(null);
    const direction = 'left';
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
    )

    const items = Array.from({ length: 15 });
    return (
        <Box
            display="flex"
            width="100%"
            paddingY="8vw"
            overflow="hidden"
            flexFlow="column"
            ref={containerRef}
        >
            <MotionBox
                style={{ x }}
                display="flex"
                columnGap="2.4vw"
                rowGap="2.4vw"
                alignItems="center"
                width="100%"
                height="6vw"
            >
                {items.map((item, i) => (
                    <Flex
                        columnGap="2.4vw"
                        rowGap="2.4vw"
                        alignItems="center"
                    >
                        <Box
                            textAlign="center"
                            textTransform="uppercase"
                            fontFamily="'Aeonik', sans-serif"
                            fontSize=".6vw"
                            fontWeight={500}
                            lineHeight={1.1}
                            verticalAlign="middle"
                        >
                            Creative<br />Technology<br />Studio
                        </Box>
                        {/* <img
                            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/672e582f6747c6055b813299_FormFun.svg"
                            loading="lazy"
                            className="logo-marquee" /> */}
                        <Box
                            className="logo-marquee text"
                            fontSize="6.125rem"
                        >
                            ExitVi
                        </Box>
                    </Flex>
                ))}       
            </MotionBox>
        </Box>
    )
}